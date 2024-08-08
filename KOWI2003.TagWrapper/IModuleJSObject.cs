using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace KOWI2003.TagWrapper;

public class IModuleJSObject(IJSObjectReference module, IJSObjectReference JSObject)
{
    protected IJSObjectReference Module { get; } = module;

    public IJSObjectReference JSObject { get; } = JSObject;

    protected async ValueTask<T> GetProperty<T>(string property) {
        return await Module.InvokeAsync<T>("getProperty", JSObject, property);
    }
    
    protected async void SetProperty<T>(string property, T value) {
        await Module.InvokeVoidAsync("setProperty", JSObject, property, value);
    }
}
