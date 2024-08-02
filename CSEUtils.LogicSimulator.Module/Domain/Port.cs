namespace CSEUtils.LogicSimulator.Module.Domain;

public record Port(Guid GateId, int Index) 
{
    public static implicit operator (Guid, int)(Port port) => (port.GateId, port.Index);

    public static Connection operator +(Port input, Port output) => new(output, input);
}
