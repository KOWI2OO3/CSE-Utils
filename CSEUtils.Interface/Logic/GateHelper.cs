using System.Data.Common;
using System.Drawing;
using System.Numerics;
using BlazeFrame.Canvas.Html;
using CSEUtils.LogicSimulator.Module.Domain;
using CSEUtils.LogicSimulator.Module.Logic.Extensions;

namespace CSEUtils.Interface.Logic;

public static class GateHelper
{
    private const int PortRadius = 10;
    private const int PortMargin = PortRadius / 2; 

    public static async Task DrawGate(this Context2D ctx, LogicEnviroment env, LogicGate gate) =>
        await DrawGate(ctx, env.GatePositions[gate.Id], gate); 

    public static async Task DrawGate(this Context2D ctx, (int x, int y) position, LogicGate gate) 
    {
        try {
            if(gate == null) return;
            var (x, y) = position;

            var tmp = ctx.Font;

            var width = GetWidth(gate);
            var height = GetHeight(gate);

            await ctx.DrawRectangleAsync((int)x + PortRadius, (int)y, width, height, "rgb(120, 0, 0)");

            var centreOffset = (PortMargin + 2 * PortRadius) * (gate.InCount / 2.0 - .5);
            for(int i = 0; i < gate.InCount; i++) 
                await ctx.DrawCircleAsync((int)x + PortRadius, (int)(y + height / 2 - centreOffset + (PortMargin + 2 * PortRadius) * i), PortRadius, "black");
            
            centreOffset = (PortMargin + 2 * PortRadius) * (gate.OutCount / 2.0 - .5);
            for(int i = 0; i < gate.OutCount; i++) 
                await ctx.DrawCircleAsync((int)x + width + PortRadius, (int)(y + height / 2 - centreOffset + (PortMargin + 2 * PortRadius) * i), PortRadius, "black");

            ctx.SetFontSize("20px");

            ctx.FillStyle = "white";
            await ctx.FillTextAsync(gate.Name, (int)x + 30, (int)(y + height/2f));

            ctx.Font = tmp;
        }catch(Exception e) {
            Console.WriteLine(e);
        }
    }

    public static async Task DrawConnection(this Context2D ctx, HtmlCanvas canvas, LogicEnviroment env, Connection connection) 
    {
        var isPowered = false;
        if(connection.Output.GateId == env.Id) {
            if(isPowered = env.Inputs[connection.Output.Index])
                ctx.SetColor("red");
        } else if(env.TryGetGate(connection.Output.GateId, out var gate) && gate != null) {
            if(isPowered = gate.Output[connection.Output.Index])
                ctx.SetColor("red");
        }

        var width = (int)canvas.Width; 

        var outputPosition = connection.Output.GetPosition(env, width);
        await ctx.DrawLineAsync([outputPosition, outputPosition, .. connection.Path, connection.Input.GetPosition(env, width)]);

        if(isPowered)
            ctx.SetColor("gray");
    }

    public static (LogicGate, Port?)? Intersect(this LogicEnviroment env, (double x, double y) mousePosition) {
        foreach(var entry in env.GatePositions) 
        {
            if(!env.TryGetGate(entry.Key, out var gate) || gate == null) continue;

            var (x, y) = entry.Value;
            var (width, height) = (GetWidth(gate), GetHeight(gate));

            var clipGate = mousePosition.x >= x && mousePosition.x <= x + 2 * PortRadius + width && 
                        mousePosition.y >= y && mousePosition.y <= y + height;
        
            if(!clipGate) continue;

            var clipPort = IntersectPorts(gate, x, y, width, height, mousePosition);
            
            if(clipPort != null || mousePosition.x >= x + PortRadius && mousePosition.x <= x + PortRadius + width)
                return (gate, clipPort);
        }
        return null;
    }

    private static Port? IntersectPorts(LogicGate gate, double x, double y, int width, int height, (double x, double y) mousePosition) 
    {
        var RadiusSquared = PortRadius * PortRadius;

        var centreOffset = (PortMargin + 2 * PortRadius) * (gate.InCount / 2.0 - .5);
        for(int i = 0; i < gate.InCount; i++) {
            var portX = (int)x + PortRadius;
            var portY = (int)(y + height / 2 - centreOffset + (PortMargin + 2 * PortRadius) * i);

            var portPosition = new Vector2(portX, portY);
            var dir = portPosition - new Vector2((float)mousePosition.x, (float)mousePosition.y);
            if (dir.LengthSquared() < RadiusSquared)
                return new(gate.Id, i, true); 
        }
        
        centreOffset = (PortMargin + 2 * PortRadius) * (gate.OutCount / 2.0 - .5);
        for(int i = 0; i < gate.OutCount; i++) {
            var portX = (int)x + PortRadius + width;
            var portY = (int)(y + height / 2 - centreOffset + (PortMargin + 2 * PortRadius) * i);

            var portPosition = new Vector2(portX, portY);
            var dir = portPosition - new Vector2((float)mousePosition.x, (float)mousePosition.y);
            if (dir.LengthSquared() < RadiusSquared)
                return new(gate.Id, i, false); 
        }
        return null;
    }

    public static Port? IntersectInputs(this LogicEnviroment environment, (double x, double y) mousePosition)
    {
        for(int i = 0; i < environment.Inputs.Count; i++) 
        {
            var y = 50 + i * 50;
            var x = 50;
            var dir = new Vector2(x - (float)mousePosition.x, y - (float)mousePosition.y);
            if (dir.LengthSquared() < PortRadius * PortRadius * 4)
                return new(environment.Id, i, true); 
        }

        return null;
    }

    public static (Port, (int, int))? IntersectInputPorts(this LogicEnviroment environment, (double x, double y) mousePosition)
    {
        for(int i = 0; i < environment.Inputs.Count; i++) 
        {
            var y = 50 + i * 50;
            var x = 100;
            var dir = new Vector2(x - (float)mousePosition.x, y - (float)mousePosition.y);
            if (dir.LengthSquared() < PortRadius * PortRadius)
                return (new(environment.Id, i, false), (x, y)); 
        }

        return null;
    }

    public static (Port, (int, int))? IntersectOutputPorts(this LogicEnviroment environment, int width, (double x, double y) mousePosition)
    {
        for(int i = 0; i < environment.Outputs.Count; i++) 
        {
            var y = 50 + i * 50;
            var x = width - 100;
            var dir = new Vector2(x - (float)mousePosition.x, y - (float)mousePosition.y);
            if (dir.LengthSquared() < PortRadius * PortRadius)
                return (new(environment.Id, i, true), (x, y)); 
        }
        return null;
    }

    public static (int, int) GetPosition(this (LogicGate, Port?) clipObject, LogicEnviroment env) 
    {
        var (gate, port) = clipObject;
        return port != null ? port.GetPosition(env, 0) : env.GatePositions[gate.Id];
    }

    public static (int, int) GetPosition(this Port port, LogicEnviroment env, int canvasWidth) 
    {
        if(port.GateId == env.Id) return port.IsInput ? (canvasWidth - 100, 50 + port.Index * 50) : (100, 50 + port.Index * 50);
        if(!env.TryGetGate(port.GateId, out var gate) || gate == null) return (0, 0);

        var (x, y) = env.GatePositions[port.GateId];
        var (width, height) = (GetWidth(gate), GetHeight(gate));
        var count = port.IsInput ? gate.InCount : gate.OutCount;
        var centreOffset = (PortMargin + 2 * PortRadius) * (count / 2.0 - .5);
        
        var portX = (int)x + PortRadius + (port.IsInput ? 0 : width);
        var portY = (int)(y + height / 2 - centreOffset + (PortMargin + 2 * PortRadius) * port.Index);
        return (portX, portY);
    }

    public static int GetWidth(this LogicGate gate) => 100;
    public static int GetHeight(this LogicGate gate) => PortMargin + (2 * PortRadius + PortMargin) * Math.Max(gate.InCount, gate.OutCount);

    public static List<(Port, (int , int))> GetPortAndPositions(this LogicGate gate, LogicEnviroment env) =>
        gate.GetPorts().Select(port => (port, port.GetPosition(env, 0))).ToList();


    public static async void DrawInputs(this Context2D ctx, HtmlCanvas canvas, LogicEnviroment env) 
    {
        await ctx.DrawRectangleAsync(0, 0, 75, 100000, "rgb(80, 80, 80)");

        for(var i = 0; i < env.Inputs.Count; i++)
            ctx.DrawInput(canvas, 50 + i * 50, env.Inputs[i]);
    }

    private static async void DrawInput(this Context2D ctx, HtmlCanvas canvas, int y, bool value) 
    {
        var lineWidth = 4;
        await ctx.DrawRectangleAsync(50, y - lineWidth, 50, lineWidth * 2, "black");

        await ctx.DrawCircleAsync(50, y, (int)(PortRadius * 1.5f), value ? "red" : "black");
        await ctx.DrawCircleAsync(100, y, PortRadius, "black");
    }

    public static async void DrawOutputs(this Context2D ctx, HtmlCanvas canvas, LogicEnviroment env) 
    {
        var x = (int)canvas.Width;
        await ctx.DrawRectangleAsync(x - 75, 0, 100, 100000, "rgb(80, 80, 80)");

        for(var i = 0; i < env.Outputs.Count; i++)
            ctx.DrawOutput(canvas, 50 + i * 50, x, env.Outputs[i]);
    }

    
    private static async void DrawOutput(this Context2D ctx, HtmlCanvas canvas, int y, int x, bool value) 
    {
        var lineWidth = 4;
        await ctx.DrawRectangleAsync(x - 100, y - lineWidth, 50, lineWidth * 2, "black");
        
        await ctx.DrawCircleAsync(x - 50, y, (int)(PortRadius * 1.5f), value ? "red" : "black");
        await ctx.DrawCircleAsync(x - 100, y, PortRadius, "black");
    }    
}
