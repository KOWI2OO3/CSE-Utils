using KOWI2003.TagWrapper.Element;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace KOWI2003.TagWrapper.Canvas;

public class HtmlCanvas(IJSObjectReference module, ElementReference element)
{
    private readonly IJSObjectReference Module = module;

    private readonly ElementReference Element = element;

    private double width { get; set; }
    public double Width { get => width; set => Element.SetAttribute(nameof(width), height = value); }

    private double height { get; set; }
    public double Height { get => height; set => Element.SetAttribute(nameof(height), height = value); }

    internal async void InitializeProperties() => await InitializePropertiesAsync();

    internal async Task InitializePropertiesAsync() {
        width = await Element.GetAttribute<double>(nameof(width));
        height = await Element.GetAttribute<double>(nameof(height));
    }

    public async Task<CanvasContext> GetContext2d(bool alpha = true) {
        var JSContext = await Module.InvokeAsync<IJSObjectReference>("getContext2d", Element, alpha);
        var context = new CanvasContext(Module, JSContext);
        await context.InitializeProperties();
        return context;
    }

    public static implicit operator ElementReference(HtmlCanvas value) => value.Element;

    public async Task<BoundingClientRect> BoundingClientRect() => await Element.BoundingClientRect(Module);

    public async Task<(double, double)> MouseToCanvasCoordinates(double mouseX, double mouseY) {
        var rect = await BoundingClientRect();
        
        var scaleX = Width / rect.Width;
        var scaleY = Height / rect.Height;
        return (
            (mouseX - rect.Left) * scaleX,
            (mouseY - rect.Top) * scaleY
        );
    } 
}
