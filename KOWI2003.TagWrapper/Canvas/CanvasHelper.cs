using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using static KOWI2003.TagWrapper.JSModule;

namespace KOWI2003.TagWrapper.Canvas;

public static class CanvasHelper
{
    public static HtmlCanvas AsCanvas(this ElementReference element) {
        return new(Module, element);
    }

    public static async Task<CanvasContext> GetContext2d(this ElementReference element) => await element.AsCanvas().GetContext2d();

    public static T GetByName<T>(string name) where T : struct, Enum =>
        Enum.GetValues<T>().FirstOrDefault(e => Enum.GetName(e)?.ToLower() == name);
}
