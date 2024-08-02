using System.Security.Cryptography;

namespace CSEUtils.LogicSimulator.Module.Domain;

public record Connection(Port Input, Port Output)
{
    public Connection(Guid outId, int outIndex, Guid inId, int inIndex) : this(new(outId, outIndex), new(inId, inIndex)) { }

    public Connection(LogicGate outGate, int outIndex, LogicGate inGate, int inIndex) : 
        this(outGate.Id, outIndex, inGate.Id, inIndex) { }
}
