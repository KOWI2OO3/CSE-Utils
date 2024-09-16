
namespace CSEUtils.Proposition.Module.Domain.Propositions;

public record Variable(string VariableKey) : IProposition
{
    public bool IsComplete => true;

    public bool Solve(Dictionary<string, bool> data) => data.TryGetValue(VariableKey, out var value) && value;

    public override string ToString() => VariableKey.ToString();
}
