using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using static KOWI2003.TagWrapper.JSModule;

namespace KOWI2003.TagWrapper.Element;

public static class ElementReferenceHelper
{
    internal static async ValueTask<T> GetProperty<T>(this ElementReference element, string property) =>
        await Module.InvokeAsync<T>("getProperty", element, property);

    public static async ValueTask<T> GetAttribute<T>(this ElementReference element, string property) => 
        await GetProperty<T>(element, property);

    public static async void SetAttribute<T>(this ElementReference element, string property, T value) => 
        await element.SetAttributeAsync(property, value);

    public static async Task SetAttributeAsync<T>(this ElementReference element, string property, T value) => 
        await Module.InvokeAsync<T>("setProperty", element, property, value);

    public static async ValueTask<int> ClientWidth(this ElementReference element) => 
        await element.GetProperty<int>("clientWidth");

    public static async ValueTask<int> ClientHeight(this ElementReference element) => 
        await element.GetProperty<int>("clientHeight"); 

    public static async ValueTask<BoundingClientRect> BoundingClientRect(this ElementReference element) {
        return await element.BoundingClientRect(Module);
    }

    public static async ValueTask<BoundingClientRect> BoundingClientRect(this ElementReference element, IJSObjectReference module) {
        var result = await module.InvokeAsync<IJSObjectReference>("getBoundingClientRect", element);
        
        var left = await module.InvokeAsync<double>("getProperty", result, "left");
        var right = await module.InvokeAsync<double>("getProperty", result, "right");
        var top = await module.InvokeAsync<double>("getProperty", result, "top");
        var bottom = await module.InvokeAsync<double>("getProperty", result, "bottom");
        return new(left, right, top, bottom);
    }

}
