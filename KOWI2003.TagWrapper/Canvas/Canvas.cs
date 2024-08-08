using KOWI2003.TagWrapper.Element;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace KOWI2003.TagWrapper.Canvas;

public class HtmlCanvas(IJSObjectReference module, ElementReference element)
{
    private readonly IJSObjectReference Module = module;

    private readonly ElementReference Element = element;

    public async Task<CanvasContext> GetContext2d() {
        var JSContext = await Module.InvokeAsync<IJSObjectReference>("getContext2d", Element);
        var context = new CanvasContext(Module, JSContext);
        await context.InitializeProperties();
        return context;
    }

    public static implicit operator ElementReference(HtmlCanvas value) => value.Element;

    public async Task<BoundingClientRect> BoundingClientRect() => await Element.BoundingClientRect(Module);
}
