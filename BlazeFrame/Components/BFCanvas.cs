using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlazeFrame.Components;

public partial class BFCanvas : ComponentBase
{
    // TODO: Use JSRuntime to not require the services if the user only uses the components?? 

    protected readonly string Id = Guid.NewGuid().ToString();

    [Parameter]
    public long Height { get; set; }

    [Parameter]
    public long Width { get; set; }

    [Parameter]
    public string Class { get; set; } = string.Empty;

    [Parameter]
    public string Style { get; set; } = string.Empty;

    private ElementReference _canvasRef { get; set; }

    public ElementReference CanvasRef => _canvasRef;
}
