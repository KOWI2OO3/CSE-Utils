using System.Drawing;

namespace KOWI2003.TagWrapper.Canvas;

public static class CanvasContextHelper
{
    public static void SetColor(this CanvasContext ctx, string color) => ctx.FillStyle = ctx.StrokeStyle = color;

    public static void SetColor(this CanvasContext ctx, Color color) => ctx.SetColor($"rgb({color.R}, {color.G}, {color.B} / {color.A})");

    public static async Task DrawRectangleAsync(this CanvasContext ctx, int x, int y, int width, int height, string? color = null)
    {
        if(color != null)
            SetColor(ctx, color);
        
        await ctx.FillRectAsync(x, y, width, height);
    }

    public static async Task DrawRectangleAsync(this CanvasContext ctx, int x, int y, int width, int height, Color color) => 
        await DrawRectangleAsync(ctx, x, y, width, height, $"rgb({color.R}, {color.G}, {color.B} / {color.A})");

    public static async Task DrawLineAsync(this CanvasContext ctx, params (int, int)[] points) 
    {
        await ctx.BeginPathAsync();
        await ctx.MoveToAsync(points[0].Item1, points[1].Item2);
        for (int i = 1; i < points.Length; i++)
            await ctx.LineToAsync(points[i].Item1, points[i].Item2);
        
        await ctx.StrokeAsync();
    }

    public static async Task DrawCircleAsync(this CanvasContext ctx, int x, int y, int radius, string? color = null) 
    {
        if(color != null)
            SetColor(ctx, color);

        await ctx.BeginPathAsync();
        await ctx.ArcAsync(x, y, radius, 0, 2 * Math.PI);
        await ctx.FillAsync();
    }

    public static void SetFontSize(this CanvasContext ctx, string fontSize) => ctx.Font = ctx.Font.WithSize(fontSize);

    public static void SetFont(this CanvasContext ctx, string font) => ctx.Font = ctx.Font.WithFont(font);
}
