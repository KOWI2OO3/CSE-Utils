using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor.Services;
using CSEUtils.Interface;
using KOWI2003.TagWrapper;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services.AddMudServices();

builder.Services.AddTagWrapperServices();

// GetType().Assembly.Modules.ForEach(module => module.RegisterServices(builder.Services));

await builder.Build().RunAsync();
