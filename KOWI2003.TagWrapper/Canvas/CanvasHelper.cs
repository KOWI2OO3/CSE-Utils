using Microsoft.AspNetCore.Components;

using static KOWI2003.TagWrapper.JSModule;

namespace KOWI2003.TagWrapper.Canvas;

public static class CanvasHelper
{   
    public static async Task<HtmlCanvas> AsCanvasAsync(this ElementReference element) {
        var canvas = new HtmlCanvas(Module, element);
        await canvas.InitializePropertiesAsync();
        return canvas;
    }

    internal static HtmlCanvas AsSimpleCanvas(this ElementReference element) => new(Module, element);

    public static async Task<CanvasContext> GetContext2d(this ElementReference element, bool alpha = true) => await element.AsSimpleCanvas().GetContext2d(alpha);

    public static T GetByName<T>(string name) where T : struct, Enum =>
        Enum.GetValues<T>().FirstOrDefault(e => Enum.GetName(e)?.ToLower() == name);
}
