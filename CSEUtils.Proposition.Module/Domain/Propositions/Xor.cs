
namespace CSEUtils.Proposition.Module.Domain.Propositions;

[Proposition(['⊕', '^'], Priority = 2)]
public class Xor : BinaryOperator
{
    public override bool Solve(Dictionary<string, bool> data) => (P?.Solve(data) ?? false) ^ (Q?.Solve(data) ?? false) ;

    public override string ToString() => $"{P?.DisplayString} ⊕ {Q?.DisplayString}";
}
