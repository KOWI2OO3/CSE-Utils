namespace CSEUtils.LogicSimulator.Module.Domain.Gates;

public class NotGate : LogicGate
{
    public override string Name => "Not";

    protected override List<bool> CalculateOutput(List<bool> inputs) => [!inputs[0]];
}
