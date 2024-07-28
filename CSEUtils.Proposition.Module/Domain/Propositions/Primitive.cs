
namespace CSEUtils.Proposition.Module.Domain.Propositions;

public record Primitive(bool Value) : IProposition
{
    public bool IsComplete => true;

    public bool Solve(Dictionary<string, bool> data) => Value;

    public override string ToString() => Value ? "T" : "F";
}
