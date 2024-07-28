namespace CSEUtils.Proposition.Module.Domain;

[AttributeUsage(AttributeTargets.Class)]
public class PropositionAttribute(char[] aliases) : Attribute
{

    public char[] Aliases { get; private set; } = aliases;

    public int Priority {get; set; }


}
