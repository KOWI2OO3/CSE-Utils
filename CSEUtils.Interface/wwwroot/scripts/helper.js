function downloadFromUrl(options)
{
    var _a;
    var anchorElement = document.createElement('a');
    anchorElement.href = options.url;
    anchorElement.download = (_a = options.filename) !== null && _a !== void 0 ? _a : '';
    anchorElement.click();
    anchorElement.remove();
}

function downloadFromByteArray(options)
{
    var url  = typeof (options.byteArray) == 'string' ? 
        `data:${options.contentType};base64,${options.byteArray}` :     // .NET 5 passes byte arrays as base64 strings 
        URL.createObjectURL(new Blob([options.byteArray], { type: options.contentType }));
    downloadFromUrl({ url: url, filename: options.fileName });
    if(typeof (options.byteArray) != 'string') URL.revokeObjectURL(url);
}