using System.Reflection.Metadata;
using BlazeFrame.Canvas.Html;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlazeFrame.Components;

public partial class BFCanvas : ComponentBase
{
    // TODO: Use JSRuntime to not require the services if the user only uses the components?? 
    // TODO: Allow screen scaling (needs experimenting)

    protected readonly string Id = Guid.NewGuid().ToString();

    [Parameter]
    public long Height { get; set; }

    [Parameter]
    public long Width { get; set; }

    [Parameter]
    public string Class { get; set; } = string.Empty;

    [Parameter]
    public string Style { get; set; } = string.Empty;

    [Parameter]
    public EventCallback<Context2D> OnRender { get; set; }

    private ElementReference _canvasRef { get; set; }

    public ElementReference CanvasRef => _canvasRef;

    public Context2D? Context { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        Context ??= await CanvasRef.GetContext2D();
        if(Context == null) return;
        Context.StartBatch();

        await OnRender.InvokeAsync(Context);

        await Context.EndBatch();
    }
}