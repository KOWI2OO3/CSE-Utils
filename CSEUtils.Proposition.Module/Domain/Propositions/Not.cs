
using CSEUtils.Proposition.Module.Logic.Extensions;

namespace CSEUtils.Proposition.Module.Domain.Propositions;

[Proposition(['¬', '-', '!', '~'], Priority = 3)]
public class Not : IProposition, IParamatized
{
    public IProposition? P { get; private set; }

    public bool Solve(Dictionary<string, bool> data) => !P?.Solve(data) ?? false;

    public bool IsComplete => P != null;

    public void AddParameter(IProposition c) => P ??= c;

    public List<string> Variables => P?.GetVariables() ?? [];

    override public string ToString() => $"¬{P?.DisplayString}";
}
