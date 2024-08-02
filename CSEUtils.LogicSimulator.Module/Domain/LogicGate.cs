using System.Threading.Channels;

namespace CSEUtils.LogicSimulator.Module.Domain;

public class LogicGate
{
    public Guid Id { get; set; } = Guid.NewGuid();
    
    private List<bool> _inputs {get;set; } = [];
    private List<bool> _outputs {get;set; } = [];

    public virtual string Name { get; set; } = string.Empty;
    public virtual int InCount { get; } = 1;
    public virtual int OutCount { get; } = 1;

    public List<bool> Output => _outputs.Count == OutCount ? _outputs : new(OutCount);
    public List<bool> Input { get => _inputs; set => InputChanged(value); }

    public void InputChanged() => InputChanged(_inputs);

    private void InputChanged(List<bool> inputs) {
        _inputs = inputs;
        _outputs = CalculateOutput(inputs);
        if(_outputs.Count != OutCount)
            throw new InvalidOperationException("Output count does not match expected count");
    }

    protected virtual List<bool> CalculateOutput(List<bool> inputs) => new(OutCount);
}
