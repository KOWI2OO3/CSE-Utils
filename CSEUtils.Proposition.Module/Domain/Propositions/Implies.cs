
namespace CSEUtils.Proposition.Module.Domain.Propositions;

[Proposition(['⇒', '→'], Priority = 1)]
public class Implies : BinaryOperator
{
    public override bool Solve(Dictionary<string, bool> data) => !(P?.Solve(data) ?? false) || (Q?.Solve(data) ?? false) ;

    public override string ToString() => $"{P?.DisplayString} ⇒ {Q?.DisplayString}";
}
