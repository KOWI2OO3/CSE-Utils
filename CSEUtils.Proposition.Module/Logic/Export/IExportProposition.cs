using CSEUtils.Proposition.Module.Domain;

namespace CSEUtils.Proposition.Module.Utils;

public interface IExportProposition
{
    public string Extension { get; }

    public string Export(IProposition proposition);

}
