using CSEUtils.Proposition.Module.Logic.Extensions;

namespace CSEUtils.Proposition.Module.Domain;

public abstract class BinaryOperator : IProposition, IParamatized
{
    public IProposition? P { get; private set; }
    public IProposition? Q { get; private set; }

    public void AddParameter(IProposition c)
    {
        if((P ??= c) != c)
            Q ??= c;
    }

    public bool IsComplete => P != null && Q != null;

    public List<string> Variables => P?.GetVariables().Union(Q?.GetVariables() ?? []).ToList() ?? [];

    public override abstract string ToString();

    public abstract bool Solve(Dictionary<string, bool> data);
}