using System.Diagnostics;
using System.Reflection;
using CSEUtils.LogicSimulator.Module.Domain;
using CSEUtils.LogicSimulator.Module.Domain.Gates;

namespace CSEUtils.LogicSimulator.Module.Tests.Domain;

public class LogicEnviromentTests
{

    [Test]
    public void AddGateTest() 
    {
        var env = new LogicEnviroment();
        var gate = new LogicGate();
        Assert.That(env.AddGate(gate), Is.True);
        Assert.That(GetGates(env)?.ContainsKey(gate.Id), Is.True);
        Assert.That(GetConnection(env)?.ContainsKey(gate.Id), Is.True);
    }

    [Test]
    public void AddGateTwiceTest() 
    {
        var env = new LogicEnviroment();
        var gate = new LogicGate();
        Assert.That(env.AddGate(gate), Is.True);
        Assert.That(env.AddGate(gate), Is.False);
        Assert.That(GetGates(env)?.ContainsKey(gate.Id), Is.True);
        Assert.That(GetConnection(env)?.ContainsKey(gate.Id), Is.True);
    }

    [Test]
    public void RemoveGateTest() 
    {
        var env = new LogicEnviroment();
        var gate = new LogicGate();
        Assert.That(env.AddGate(gate), Is.True);

        env.RemoveGate(gate.Id);
        Assert.Multiple(() =>
        {
            Assert.That(GetGates(env)?.ContainsKey(gate.Id), Is.False);
            Assert.That(GetConnection(env)?.ContainsKey(gate.Id), Is.False);
        });
    }

    [Test]
    public void AddConnectionTest() 
    {
        var env = new LogicEnviroment();
        var gate1 = new AndGate();
        env.AddGate(gate1);
        
        var gate2 = new AndGate();
        env.AddGate(gate2);

        var connection = new Connection(gate1, 0, gate2, 0);
        env.AddConnection(connection);

        var connections = GetConnection(env);
        if (connections == null)
            throw new Exception("Connections dictionary is null");

        Assert.That(connections.ContainsKey(gate1.Id), Is.True);
        Assert.That(connections.ContainsKey(gate2.Id), Is.True);

        Assert.That(connections[gate1.Id].Item2.Any(c => c.Input.GateId == gate2.Id), Is.True);
        Assert.That(connections[gate2.Id].Item1.Any(c => c.Output.GateId == gate1.Id), Is.True);
    }

    [Test]
    public void RemoveConnectionTest() 
    {
        var env = new LogicEnviroment();
        var gate1 = new AndGate();
        env.AddGate(gate1);
        
        var gate2 = new AndGate();
        env.AddGate(gate2);

        var connection = new Connection(gate1, 0, gate2, 0);
        env.AddConnection(connection);
        
        env.RemoveConnection(connection);

        var connections = GetConnection(env);
        if (connections == null)
            throw new Exception("Connections dictionary is null");

        Assert.That(connections.ContainsKey(gate1.Id), Is.True);
        Assert.That(connections.ContainsKey(gate2.Id), Is.True);

        Assert.That(connections[gate1.Id].Item2.Any(c => c.Input.GateId == gate2.Id), Is.False);
        Assert.That(connections[gate2.Id].Item1.Any(c => c.Output.GateId == gate1.Id), Is.False);
    }

    [Test]
    public void RemoveGateWithConnectionTest() 
    {
        var env = new LogicEnviroment();
        var gate1 = new AndGate();
        env.AddGate(gate1);
        
        var gate2 = new AndGate();
        env.AddGate(gate2);

        var connection = new Connection(gate1, 0, gate2, 0);
        env.AddConnection(connection);
        
        env.RemoveGate(gate1.Id);

        var connections = GetConnection(env);
        if (connections == null)
            throw new Exception("Connections dictionary is null");

        Assert.That(connections.ContainsKey(gate1.Id), Is.False);
        Assert.That(connections.ContainsKey(gate2.Id), Is.True);

        Assert.That(connections[gate2.Id].Item1.Any(c => c.Output.GateId == gate1.Id), Is.False);
    }

    [Test]
    public void UpdateNonExisitingGateTest() 
    {
        var env = new LogicEnviroment();
        Assert.That(() => InvokeUpdateGate(env, Guid.NewGuid()), Throws.Exception);
    }

    [Test]
    public void UpdateGateTest() 
    {
        var env = new LogicEnviroment();
        var notGate = new NotGate();
        env.AddGate(notGate);

        var connection = new Connection(notGate, 0, notGate, 0);
        env.AddConnection(connection);

        var result = InvokeUpdateGate(env, notGate.Id);
        if(result == null)
            throw new NullReferenceException();

        Assert.That(result!.Count == 1, Is.True);
        Assert.That(result![0], Is.True);

        // Additional second test to ensure the update takes the cached output value
        result = InvokeUpdateGate(env, notGate.Id);
        if(result == null)
            throw new NullReferenceException();
        Assert.That(result![0], Is.False);
    }

    [Test]
    public void TestGateUpdates() 
    {
        var env = new LogicEnviroment();
        var notGate = new NotGate();
        env.AddGate(notGate);
        var andGate = new AndGate();
        env.AddGate(andGate);

        var connection = new Connection(notGate, 0, andGate, 0);
        env.AddConnection(connection);
        connection = new Connection(notGate, 0, andGate, 1);
        env.AddConnection(connection);

        env.Update();

        Assert.That(notGate.Output[0], Is.True);

        env.Update();
        
        Assert.That(andGate.Output[0], Is.True);
    }

    private static Dictionary<Guid, LogicGate>? GetGates(LogicEnviroment env) {
        var prop = typeof(LogicEnviroment).GetProperty("Gates", BindingFlags.NonPublic | BindingFlags.Instance);

        var getter = prop?.GetGetMethod(nonPublic: true);
        return getter?.Invoke(env, null) as Dictionary<Guid, LogicGate>;
    }

    private static Dictionary<Guid, (List<Connection>, List<Connection>)>? GetConnection(LogicEnviroment env) {
        var prop = typeof(LogicEnviroment).GetProperty("Connections", BindingFlags.NonPublic | BindingFlags.Instance);

        var getter = prop?.GetGetMethod(nonPublic: true);
        return getter?.Invoke(env, null) as Dictionary<Guid, (List<Connection>, List<Connection>)>;
    }

    private static List<bool>? InvokeUpdateGate(LogicEnviroment env, Guid gateId) {
        var method = typeof(LogicEnviroment).GetMethod("UpdateGate", BindingFlags.NonPublic | BindingFlags.Instance);
        return method?.Invoke(env, [gateId]) as List<bool>;
    }
}
