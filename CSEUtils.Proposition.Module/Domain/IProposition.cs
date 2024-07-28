namespace CSEUtils.Proposition.Module.Domain;

public interface IProposition
{
    public bool Solve(Dictionary<string, bool> data);

    public bool IsComplete { get; }

    public string? DisplayString => this is IParamatized ? $"({this})" : $"{this}";

}
