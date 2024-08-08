
using KOWI2003.TagWrapper.Canvas.Types;
using Microsoft.JSInterop;

namespace KOWI2003.TagWrapper.Canvas;

public class CanvasContext(IJSObjectReference module, IJSObjectReference JSObject) : 
    IModuleJSObject(module, JSObject)
{

    private string fillStyle { get; set; } = string.Empty;
    public string FillStyle { get => fillStyle; set => SetProperty(nameof(fillStyle), fillStyle = value); }
    
    private string strokeStyle { get; set; } = string.Empty;
    public string StrokeStyle { get => strokeStyle; set => SetProperty(nameof(strokeStyle), strokeStyle = value); }
    
    private double lineWidth { get; set; }
    public double LineWidth { get => lineWidth; set => SetProperty(nameof(lineWidth), lineWidth = value); }

    private EnumStringWrapper<LineJoinType> lineJoin { get; set; } = default(LineJoinType);
    public EnumStringWrapper<LineJoinType> LineJoin { get => lineJoin; set => SetProperty(nameof(lineJoin), Enum.GetName<LineJoinType>(lineJoin = value)?.ToLower()); }

    private EnumStringWrapper<LineCapType> lineCap { get; set; } = default(LineCapType);
    public EnumStringWrapper<LineCapType> LineCap { get => lineCap; set => SetProperty(nameof(lineCap), Enum.GetName<LineCapType>(lineCap = value)?.ToLower()); }

    private JSFont font { get; set; } = JSFont.Default;
    public JSFont Font { get => font; set => SetProperty<string>(nameof(font), font = value); }

    private double shadowBlur { get; set; }
    public double ShadowBlur { get => shadowBlur; set => SetProperty(nameof(shadowBlur), shadowBlur = value); } 

    private string shadowColor { get; set; } = string.Empty;
    public string ShadowColor { get => shadowColor; set => SetProperty(nameof(shadowColor), shadowColor = value); } 

    private double shadowOffsetX  { get; set; }
    public double ShadowOffsetX { get => shadowOffsetX; set => SetProperty(nameof(shadowOffsetX), shadowOffsetX = value); } 

    private double shadowOffsetY  { get; set; }
    public double ShadowOffsetY { get => shadowOffsetY; set => SetProperty(nameof(shadowOffsetY), shadowOffsetY = value); } 

    internal async Task InitializeProperties()
    {
        fillStyle = await GetProperty<string>(nameof(fillStyle));
        strokeStyle = await GetProperty<string>(nameof(strokeStyle));
        lineWidth = await GetProperty<double>(nameof(lineWidth));
        lineJoin = CanvasHelper.GetByName<LineJoinType>(await GetProperty<string>(nameof(lineJoin)));
        lineCap = CanvasHelper.GetByName<LineCapType>(await GetProperty<string>(nameof(lineCap)));
        shadowBlur = await GetProperty<double>(nameof(shadowBlur));
        shadowColor = await GetProperty<string>(nameof(shadowColor));
        shadowOffsetX = await GetProperty<double>(nameof(shadowOffsetX));
        shadowOffsetY = await GetProperty<double>(nameof(shadowOffsetY));
    }

    public async void ClearRect(double x, double y, double width, double height) =>
        await JSObject.InvokeVoidAsync("clearRect", x, y, width, height);

    public async Task ClearRectAsync(double x, double y, double width, double height) =>
        await JSObject.InvokeVoidAsync("clearRect", x, y, width, height);

    public async void FillRect(double x, double y, double width, double height) =>
        await FillRectAsync(x, y, width, height);

    public async Task FillRectAsync(double x, double y, double width, double height) =>
        await JSObject.InvokeVoidAsync("fillRect", x, y, width, height);

    public async Task FillRectAsyncAsync(double x, double y, double width, double height) =>
        await JSObject.InvokeVoidAsync("fillRect", x, y, width, height);

    public async void BeginPath() =>
        await JSObject.InvokeVoidAsync("beginPath");

    public async Task BeginPathAsync() =>
        await JSObject.InvokeVoidAsync("beginPath");

    public async void LineTo(double x, double y) =>
        await JSObject.InvokeVoidAsync("lineTo", x, y);

    public async Task LineToAsync(double x, double y) =>
        await JSObject.InvokeVoidAsync("lineTo", x, y);

    public async void MoveTo(double x, double y) =>
        await JSObject.InvokeVoidAsync("moveTo", x, y);

    public async Task MoveToAsync(double x, double y) =>
        await JSObject.InvokeVoidAsync("moveTo", x, y);

    public async void ClosePath() =>
        await JSObject.InvokeVoidAsync("closePath");

    public async Task ClosePathAsync() =>
        await JSObject.InvokeVoidAsync("closePath");

    public async void Stroke() =>
        await JSObject.InvokeVoidAsync("stroke");

    public async Task StrokeAsync() =>
        await JSObject.InvokeVoidAsync("stroke");

    public async void Fill() =>
        await JSObject.InvokeVoidAsync("fill");

    public async Task FillAsync() =>
        await JSObject.InvokeVoidAsync("fill");

    public async void Reset() =>
        await JSObject.InvokeVoidAsync("reset");

    public async Task ResetAsync() =>
        await JSObject.InvokeVoidAsync("reset");

    public async void Save() =>
        await JSObject.InvokeVoidAsync("save");

    public async Task SaveAsync() =>
        await JSObject.InvokeVoidAsync("save");

    public async void Restore() =>
        await JSObject.InvokeVoidAsync("restore");

    public async Task RestoreAsync() =>
        await JSObject.InvokeVoidAsync("restore");

    public async void Arc(double x, double y, double radius, double startAngle, double endAngle, bool counterClockwise = false) =>
        await JSObject.InvokeVoidAsync("arc", x, y, radius, startAngle, endAngle, counterClockwise);

    public async Task ArcAsync(double x, double y, double radius, double startAngle, double endAngle, bool counterClockwise = false) =>
        await JSObject.InvokeVoidAsync("arc", x, y, radius, startAngle, endAngle, counterClockwise);

    public async void ArcTo(double x1, double y1, double x2, double y2, double radius) =>
        await JSObject.InvokeVoidAsync("arcTo", x1, y1, x2, y2, radius);

    public async Task ArcToAsync(double x1, double y1, double x2, double y2, double radius) =>
        await JSObject.InvokeVoidAsync("arcTo", x1, y1, x2, y2, radius);

    public async void QuadraticCurveTo(double cpx, double cpy, double x, double y) =>
        await JSObject.InvokeVoidAsync("quadraticCurveTo", cpx, cpy, x, y);

    public async Task QuadraticCurveToAsync(double cpx, double cpy, double x, double y) =>
        await JSObject.InvokeVoidAsync("quadraticCurveTo", cpx, cpy, x, y);

    public async void BrazierCurveTo(double cp1x, double cp1y, double cp2x, double cp2y, double x, double y) =>
        await JSObject.InvokeVoidAsync("bezierCurveTo", cp1x, cp1y, cp2x, cp2y, x, y);

    public async Task BrazierCurveToAsync(double cp1x, double cp1y, double cp2x, double cp2y, double x, double y) =>
        await JSObject.InvokeVoidAsync("bezierCurveTo", cp1x, cp1y, cp2x, cp2y, x, y);

    public async void FillText(string text, double x, double y) =>
        await JSObject.InvokeVoidAsync("fillText", text, x, y);

    public async Task FillTextAsync(string text, double x, double y) =>
        await JSObject.InvokeVoidAsync("fillText", text, x, y);

    public async void FillText(string text, double x, double y, double maxWidth) =>
        await JSObject.InvokeVoidAsync("fillText", text, x, y, maxWidth);

    public async Task FillTextAsync(string text, double x, double y, double maxWidth) =>
        await JSObject.InvokeVoidAsync("fillText", text, x, y, maxWidth);

    public async void StrokeText(string text, double x, double y) =>
        await JSObject.InvokeVoidAsync("strokeText", text, x, y);

    public async Task StrokeTextAsync(string text, double x, double y) =>
        await JSObject.InvokeVoidAsync("strokeText", text, x, y);

    public async void StrokeText(string text, double x, double y, double maxWidth) =>
        await JSObject.InvokeVoidAsync("strokeText", text, x, y, maxWidth);

    public async Task StrokeTextAsync(string text, double x, double y, double maxWidth) =>
        await JSObject.InvokeVoidAsync("strokeText", text, x, y, maxWidth);

    public async void StrokeRect(double x, double y, double width, double height) =>
        await JSObject.InvokeVoidAsync("strokeRect", x, y, width, height);

    public async Task StrokeRectAsync(double x, double y, double width, double height) =>
        await JSObject.InvokeVoidAsync("strokeRect", x, y, width, height);

    public async void Rect(double x, double y, double width, double height) =>
        await JSObject.InvokeVoidAsync("rect", x, y, width, height);

    public async Task RectAsync(double x, double y, double width, double height) =>
        await JSObject.InvokeVoidAsync("rect", x, y, width, height);

    public async void RoundRect(double x, double y, double width, double height, double radii) =>
        await JSObject.InvokeVoidAsync("roundRect", x, y, width, height, radii);

    public async Task RoundRectAsync(double x, double y, double width, double height, double radii) =>
        await JSObject.InvokeVoidAsync("roundRect", x, y, width, height, radii);

    public async void RoundRect(double x, double y, double width, double height, double[] radii) =>
        await JSObject.InvokeVoidAsync("roundRect", x, y, width, height, radii);

    public async Task RoundRectAsync(double x, double y, double width, double height, double[] radii) =>
        await JSObject.InvokeVoidAsync("roundRect", x, y, width, height, radii);

    public async void Ellipse(double x, double y, double radiusX, double radiusY, double rotation, double startAngle, double endAngle, bool counterClockwise = false) =>
        await JSObject.InvokeVoidAsync("ellipse", x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockwise);

    public async Task EllipseAsync(double x, double y, double radiusX, double radiusY, double rotation, double startAngle, double endAngle, bool counterClockwise = false) =>
        await JSObject.InvokeVoidAsync("ellipse", x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockwise);

    public async void SetLineDash(double[] segments) =>
        await JSObject.InvokeVoidAsync("setLineDash", segments);

    public async Task SetLineDashAsync(double[] segments) =>
        await JSObject.InvokeVoidAsync("setLineDash", segments);

    // CreateRadialGradient

    // public async Task<IJSObjectReference> MeasureText()
}
