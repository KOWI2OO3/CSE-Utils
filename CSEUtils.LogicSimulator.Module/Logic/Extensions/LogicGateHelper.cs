using CSEUtils.LogicSimulator.Module.Domain;

namespace CSEUtils.LogicSimulator.Module.Logic.Extensions;

public static class LogicGateHelper
{
    public static List<Port> GetPorts(this LogicGate gate) 
    {
        var result = new List<Port>();
        for(int i = 0; i < gate.InCount; i++)
            result.Add(new(gate.Id, i, true));
        for(int i = 0; i < gate.OutCount; i++)
            result.Add(new(gate.Id, i, false));
        return result;
    } 
}
