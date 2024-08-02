namespace CSEUtils.LogicSimulator.Module.Domain.Gates;

public class OrGate : LogicGate
{
    public override string Name => "Or";

    public override int InCount => 2;

    protected override List<bool> CalculateOutput(List<bool> inputs) => [inputs[0] || inputs[1]];
}
