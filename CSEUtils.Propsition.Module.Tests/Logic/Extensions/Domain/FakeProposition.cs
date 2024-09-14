using CSEUtils.Proposition.Module.Domain;

namespace CSEUtils.Propsition.Module.Tests.Logic.Extensions.Domain;

public record FakeProposition(List<string> Variables) : IProposition, IParamatized
{
    public bool IsComplete => true;

    public void AddParameter(IProposition c)
    {
        throw new NotImplementedException();
    }

    public bool Solve(Dictionary<string, bool> data)
    {
        throw new NotImplementedException();
    }
}
