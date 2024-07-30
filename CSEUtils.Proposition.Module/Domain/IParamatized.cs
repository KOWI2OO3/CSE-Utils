namespace CSEUtils.Proposition.Module.Domain;

public interface IParamatized
{
    public void AddParameter(IProposition c);

    public List<string> Variables { get; }

}
