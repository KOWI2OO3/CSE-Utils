namespace CSEUtils.LogicSimulator.Module.Domain;

public record Port(Guid GateId, int Index, bool IsInput) 
{    
    public static implicit operator (Guid, int)(Port port) => (port.GateId, port.Index);

    public static implicit operator (Guid, int, bool)(Port port) => (port.GateId, port.Index, port.IsInput);

    public static Connection operator +(Port input, Port output) => new(output, input);
}
