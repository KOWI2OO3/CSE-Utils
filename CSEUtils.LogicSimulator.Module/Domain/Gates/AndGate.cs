
namespace CSEUtils.LogicSimulator.Module.Domain.Gates;

public class AndGate : LogicGate
{
    public override string Name => "And";

    public override int InCount => 2;

    protected override List<bool> CalculateOutput(List<bool> inputs) => [inputs[0] && inputs[1]];
}
