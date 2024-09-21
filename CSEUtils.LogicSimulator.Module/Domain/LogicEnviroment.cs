using System.Runtime.CompilerServices;
using CSEUtils.App.Shared.Domain;
using CSEUtils.LogicSimulator.Module.Logic.Extensions;

namespace CSEUtils.LogicSimulator.Module.Domain;

public class LogicEnviroment
{
    public Guid Id { get; } = Guid.NewGuid();

    private List<bool> _inputs { get; set; } = [];
    private List<bool> _outputs { get; set; } = [];

    private int OutputCount { get; set; } = 1;
    private int InputCount { get; set; } = 1;

    public List<bool> Inputs { get => _inputs; set => _inputs = value; }
    public List<bool> Outputs { get => _outputs; private set => _outputs = value; }

    public List<LogicGate> GateList => [.. Gates.Values];

    public Dictionary<Guid, Vector2> GatePositions { get; set; } = [];

    private Dictionary<Guid, LogicGate> Gates { get; set; } = [];

    // Connection defines to which gate the input & output are connected respectively
    private Dictionary<Guid, (List<Connection>, List<Connection>)> Connections { get; set; } = [];

    public LogicEnviroment(int intputSize = 1, int outputSize = 1)
    {
        Inputs = ListHelper.CreateList<bool>(InputCount = intputSize);
        Outputs = ListHelper.CreateList<bool>(OutputCount = outputSize);
        Connections.Add(Id, (new(InputCount), new(OutputCount)));
    }

    public bool AddGate(LogicGate gate)
    { 
        return Gates.TryAdd(gate.Id, gate) && 
            Connections.TryAdd(gate.Id, (new(gate.InCount), new(gate.OutCount)))
            && GatePositions.TryAdd(gate.Id, new());
    }

    public void RemoveGate(Guid gateId) 
    {
        GatePositions.Remove(gateId);
        Connections.Remove(gateId);
        Gates.Remove(gateId);
        foreach (var io in Connections.Values)
        {
            io.Item1.RemoveGate(gateId);
            io.Item2.RemoveGate(gateId);
        }
    }

    /// <summary>
    /// Adds a new connection to the enviroment
    /// </summary>
    /// <param name="connection">The connection to add</param>
    /// <exception cref="NotSupportedException">Occurs if a connection is added when the gates are not registered</exception>
    public void AddConnection(Connection connection) 
    {
        if(!(Gates.ContainsKey(connection.Input.GateId) || connection.Input.GateId == Id) || 
                !(Gates.ContainsKey(connection.Output.GateId) || connection.Output.GateId == Id)) 
            throw new NotSupportedException("Gates should be added to the enviroment before they can be connected");
        
        if(!Connections.TryGetValue(connection.Input.GateId, out var inputConnections))
            throw new NotSupportedException("Gate was not properly initialized missing connections entry");
        inputConnections.Item1.Add(connection);

        if(!Connections.TryGetValue(connection.Output.GateId, out var outputConnections))
            throw new NotSupportedException("Gate was not properly initialized missing connections entry");
        outputConnections.Item2.Add(connection);
    }

    /// <summary>
    /// Removes a connection from the enviroment
    /// </summary>
    /// <param name="connection">The connection to remove</param>
    /// <exception cref="NotSupportedException">Occurs if a connection is added when the gates are not registered</exception>
    public void RemoveConnection(Connection connection) 
    {
        if(!Connections.TryGetValue(connection.Input.GateId, out var inputConnections))
            throw new NotSupportedException("Gate was not properly initialized missing connections entry");
        inputConnections.Item1.Remove(connection);

        if(!Connections.TryGetValue(connection.Output.GateId, out var outputConnections))
            throw new NotSupportedException("Gate was not properly initialized missing connections entry");
        outputConnections.Item2.Remove(connection);
    }

    public void Update() 
    {
        //TODO: Requires rewrite

        foreach (var gateId in Gates.Keys)
            UpdateGate(gateId);
        
        UpdateEnviroment();
    }

    private void CascadeUpdate(Guid gateId, ref Stack<Guid> update) 
    {
        UpdateGate(gateId);
        foreach(var connection in Connections[gateId].Item2)
            update.Push(connection.Input.GateId);
        
        while(update.Count > 0)
            CascadeUpdate(update.Pop(), ref update);
    }

    private List<bool> UpdateGate(Guid gateId) 
    {
        if(!Gates.TryGetValue(gateId, out var gate))
            throw new NotSupportedException("Gate was not registered in the enviroment");
        if(!Connections.TryGetValue(gateId, out var connections))
            throw new NotSupportedException("Gate was not properly initialized missing connections entry");
        
        var inputs = connections.Item1;
        var inputValues = ListHelper.CreateList<bool>(gate.InCount);
        foreach(var connection in inputs) 
            inputValues[connection.Input.Index] = GetGateOutputs(connection.Output.GateId)[connection.Output.Index];
        
        gate.Input = inputValues;
        return gate.Output;
    }

    private void UpdateEnviroment() 
    {
        if(!Connections.TryGetValue(Id, out var connections))
            throw new NotSupportedException("Gate was not properly initialized missing connections entry");
        foreach(var connection in connections.Item1)
        {
            Outputs[connection.Input.Index] = GetState(connection.Output);
        }
    }

    private List<bool> GetGateOutputs(Guid gateId) 
    {
        if(gateId == Id) return Inputs;

        if(!Gates.TryGetValue(gateId, out var gate))
            throw new NotSupportedException("Gate was not registered in the enviroment");
        return gate.Output;
    }

    /// <summary>
    /// Gets the state of the port
    /// </summary>
    /// <param name="port">The port to get the state from, this must me either input to the circuit, or an port on an gate</param>
    /// <returns>a boolean to signify a 0 or a 1</returns>
    /// <exception cref="NotSupportedException"></exception>
    private bool GetState(Port port)
    {
        if(port.GateId == Id) return Inputs[port.Index];
        if(!Gates.TryGetValue(port.GateId, out var gate))
            throw new NotSupportedException("Gate was not registered in the enviroment");

        return gate.Output.Count > port.Index && gate.Output[port.Index];
    }

    public bool TryGetGate(Guid gateId, out LogicGate? gate) => Gates.TryGetValue(gateId, out gate);

    public IEnumerable<Connection> GetConnections() => Connections.Values.SelectMany(connections => connections.Item1);
}