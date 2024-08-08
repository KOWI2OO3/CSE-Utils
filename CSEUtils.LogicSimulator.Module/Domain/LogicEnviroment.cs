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

    public List<LogicGate> GateList => new(Gates.Values);

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
        foreach (var gateId in Gates.Keys)
            UpdateGate(gateId);
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
            inputValues[connection.Input.Index] = GetGateOutputs(gateId)[connection.Output.Index];
        
        gate.Input = inputValues;
        return gate.Output;
    }

    private List<bool> GetGateOutputs(Guid gateId) 
    {
        if(gateId == Id) return Outputs;

        if(!Gates.TryGetValue(gateId, out var gate))
            throw new NotSupportedException("Gate was not registered in the enviroment");
        return gate.Output;
    }

    public bool TryGetGate(Guid gateId, out LogicGate? gate) => Gates.TryGetValue(gateId, out gate);
}
