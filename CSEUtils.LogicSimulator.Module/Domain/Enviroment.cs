using System.Text;
using CSEUtils.LogicSimulator.Module.Logic.Extensions;

namespace CSEUtils.LogicSimulator.Module.Domain;

public class Enviroment
{
    public Guid Id { get; } = Guid.NewGuid();

    private List<bool> _inputs { get; set; } = [];
    private List<bool> _outputs { get; set; } = [];

    public List<bool> Inputs { get => _inputs; set => _inputs = value; }
    public List<bool> Outputs { get => _outputs; private set => _outputs = value; }

    private Dictionary<Guid, LogicGate> Gates { get; set; } = [];
    private Dictionary<Guid, (List<Guid>, List<Guid>)> Connections { get; set; } = [];

    public Enviroment(int intputSize = 1, int outputSize = 1)
    {
        Inputs = ListHelper.CreateList<bool>(intputSize);
        Outputs = ListHelper.CreateList<bool>(outputSize);
        Connections.Add(Id, (ListHelper.CreateList<Guid>(Inputs.Count), ListHelper.CreateList<Guid>(Outputs.Count)));
    }

    public bool AddGate(LogicGate gate) =>
        Gates.TryAdd(gate.Id, gate) && 
            Connections.TryAdd(gate.Id, (ListHelper.CreateList<Guid>(gate.InCount), ListHelper.CreateList<Guid>(gate.OutCount)));

    public void RemoveGate(Guid gateId) 
    {
        Connections.Remove(gateId);
        Gates.Remove(gateId);
        foreach (var io in Connections.Values)
        {
            io.Item1.RemoveGate(gateId);
            io.Item2.RemoveGate(gateId);
        }
    }

    public void AddConnection((Guid, int) output, (Guid, int) input) 
    {
        if(!Gates.ContainsKey(output.Item1))
            throw new NotSupportedException("Output gate was not added to the enviroment");
        if(!Gates.ContainsKey(input.Item1))
            throw new NotSupportedException("Input gate was not added to the enviroment");

        if(Connections.TryGetValue(output.Item1, out var outputIO))
            throw new Exception("Illegal state occured, output gate added without connections");
        if(outputIO.Item2.Count > output.Item2)
            throw new NotSupportedException("Output index out of range");

        if(Connections.TryGetValue(input.Item1, out var inputIO))
            throw new Exception("Illegal state occured, input gate added without connections");
        if(inputIO.Item1.Count > input.Item2)
            throw new NotSupportedException("Input index out of range");

        outputIO.Item2[output.Item2] = input.Item1;
        inputIO.Item1[input.Item2] = output.Item1;
    }

    public void RemoveConnection((Guid, int) output, (Guid, int) input) {
        if(!Gates.ContainsKey(output.Item1))
            throw new NotSupportedException("Output gate was not added to the enviroment");
        if(!Gates.ContainsKey(input.Item1))
            throw new NotSupportedException("Input gate was not added to the enviroment");

        if(Connections.TryGetValue(output.Item1, out var outputIO))
            throw new Exception("Illegal state occured, output gate added without connections");
        if(outputIO.Item2.Count > output.Item2)
            throw new NotSupportedException("Output index out of range");

        if(Connections.TryGetValue(input.Item1, out var inputIO))
            throw new Exception("Illegal state occured, input gate added without connections");
        if(inputIO.Item1.Count > input.Item2)
            throw new NotSupportedException("Input index out of range");

        outputIO.Item2[output.Item2] = Guid.Empty;
        inputIO.Item1[input.Item2] = Guid.Empty;
    }

    public void Update() {}

}
