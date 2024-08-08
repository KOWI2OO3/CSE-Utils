using System.Diagnostics.CodeAnalysis;
using Microsoft.JSInterop;

namespace KOWI2003.TagWrapper;

public class JSModule
{
    public static IJSObjectReference Module { get; private set; } = default!;

    public JSModule(IJSRuntime runtime) => Initialize(runtime, "./_content/KOWI2003.TagWrapper/canvasWrapper.js");

    private static async void Initialize(IJSRuntime jSRuntime, string module) {
        Lazy<Task<IJSObjectReference>> moduleTask = new(() => jSRuntime.InvokeAsync<IJSObjectReference>(
            "import", module).AsTask());

        Module = await moduleTask.Value;
    }
}
