using Microsoft.Extensions.DependencyInjection;
using Microsoft.JSInterop;

namespace KOWI2003.TagWrapper;

public static class ServiceHelper
{
    public static void AddTagWrapperServices(this IServiceCollection services) {
        // A really hacky workaround to get the js runtime such that we don't need to pass it to each function
        foreach(var service in services) {
            if(service.ServiceType == typeof(IJSRuntime) && service.ImplementationInstance is IJSRuntime jSRuntime) {
                _ = new JSModule(jSRuntime);
                break;
            }
        }
    }

}
