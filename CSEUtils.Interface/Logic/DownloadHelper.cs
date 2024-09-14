using Microsoft.JSInterop;

namespace CSEUtils.Interface.Logic;

public static class DownloadHelper
{
    public static async void DownloadFileFromUrl(IJSRuntime runtime, string url, string path)
    {
        await runtime.InvokeVoidAsync(
            "downloadFromUrl",
            new
            {
                Url = url,
                Path = path
            }
        );
    }

    public static async void DownloadFileFromContent(IJSRuntime runtime, string content, string fileName)
    {
        var bytes = content.ToCharArray()
            .Select(c => (byte)c)
            .ToArray();
        await runtime.InvokeVoidAsync(
            "downloadFromByteArray",
            new
            {
                ByteArray = bytes,
                FileName = fileName,
                ContentType = "text/plain"
            });
    }
    
}
