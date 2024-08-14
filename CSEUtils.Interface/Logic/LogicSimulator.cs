using BlazeFrame.Canvas.Html;
using BlazeFrame.Logic;
using CSEUtils.App.Shared.Domain;
using CSEUtils.Interface.Logic;
using CSEUtils.LogicSimulator.Module.Domain;
using CSEUtils.LogicSimulator.Module.Domain.Gates;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace CSEUtils.Interface.Pages;

public partial class LogicSimulator : ComponentBase
{
    private Vector2 MousePosition { get; set; } = new();

    private List<(int, int)> ActivePath { get; set; } = []; 

    private Dictionary<Guid, Vector2> MouseHolding { get; set; } = [];

    private Port? PathPort = null;
    private bool isShiftDown;

    private Dictionary<Type, LogicGate> GateTypes = new() { { typeof(AndGate), new AndGate() }, { typeof(NotGate), new NotGate() } };

    protected async Task Render() 
    {
        Enviroment.Update();

        Context ??= await Canvas.GetContext2D();
        if(Context == null) return;

        Context.StartBatch();
        Context.FillStyle = "white";
        await Context.ClearRectAsync(0, 0, Resolution.Item1, Resolution.Item2);

        foreach(var gate in Enviroment.GateList)
        {
            if(gate != null)
                await Context.DrawGate(Enviroment, gate);
        }

        Context.SetColor("gray");
        Context.LineJoin = LineJoinType.Round;
        Context.LineWidth = 5;

        // Draw connections
        foreach (var connection in Enviroment.GetConnections())
            await Context.DrawConnection(Enviroment, connection);

        // Draw active path
        if(PathPort != null)
            await Context.DrawLineAsync([.. ActivePath, NextPositionToAdd()]);

        await Context.EndBatch();
    }
    
    private async Task<(double, double)> MouseToCanvas(Vector2 mousePosition) 
    {
        var rect = await Canvas.GetBoundingClientRect();

        var scaleX = Resolution.Item1 / (double)rect.Width;
        var scaleY = Resolution.Item2 / (double)rect.Height;
        return (
            (mousePosition.X - rect.Left) * scaleX,
            (mousePosition.Y - rect.Top) * scaleY
        );
    }

    private async void MoveMouse(MouseEventArgs mouseEvent) 
    {
        var relativePosition = await MouseToCanvas(MousePositionAbsolute = new(mouseEvent.ClientX, mouseEvent.ClientY));
        MousePosition = new(relativePosition.Item1, relativePosition.Item2);

        isShiftDown = mouseEvent.ShiftKey;

        foreach (var entry in MouseHolding)
            Enviroment.GatePositions[entry.Key] = entry.Value + MousePosition;
    }
    
    private void OnRightClick(MouseEventArgs mouseEvent) 
    {
        // Right Click to undo last path
        if(MousePosition.Y > 0 && PathPort != null) {
            if(ActivePath.Count == 2) {
                ActivePath.Clear();
                PathPort = null;
            }
            else
                ActivePath.RemoveAt(ActivePath.Count - 1);
        }
    }

    private void MouseDown(MouseEventArgs mouseEvent) 
    {
        if(mouseEvent.Button == 2 && MousePosition.Y > 0) {
            (LogicGate gate, Port? port)? intersect = Enviroment.Intersect(MousePosition);
            if(intersect != null)
                Enviroment.RemoveGate(intersect.Value.gate.Id);
        }
        if(mouseEvent.Button == 0 && MousePosition.Y > 0) {
            
            (LogicGate gate, Port? port)? intersect = Enviroment.Intersect(MousePosition);
            if(PathPort != null) {
                if(intersect != null) 
                {
                    if(intersect?.port != null) 
                    {
                        var port = intersect.Value.port!;

                        // Only connect input to output (and vice-versa)
                        if(port.IsInput == PathPort.IsInput) return;
                        
                        // finish path
                        ActivePath.RemoveRange(0, 2);

                        var connection = port.IsInput ? 
                            new Connection(intersect.Value.port!, PathPort, [ .. ActivePath]) : // Started from output port
                            new Connection(PathPort, intersect.Value.port!, [ .. ActivePath]);  // Started from input port 
                        Enviroment.AddConnection(connection);

                        // Cleanup5
                        PathPort = null;
                        ActivePath.Clear();
                    }
                }
                else
                    ActivePath.Add(NextPositionToAdd());
            }
            else if(MouseHolding.Count != 0) // setdown gates
                MouseHolding.Clear();
            else if(intersect != null)
            {
                (int x, int y) position = intersect.Value.GetPosition(Enviroment);
                if(intersect.Value.port != null) // start connection from port
                {
                    PathPort = intersect.Value.port;
                    ActivePath.Add(position);
                    ActivePath.Add(position);
                }
                else // pickup gate
                {
                    MouseHolding.Add(intersect.Value.gate.Id, (
                        position.x - MousePosition.X,
                        position.y - MousePosition.Y
                    ));
                }
            }
        }
    }

    private (int, int) NextPositionToAdd() 
    {
        if(isShiftDown) return MousePosition;

        var pathErrorMargin = 10;
        
        (int x, int y) position = MousePosition;
        (int x, int y) lastPosition = ActivePath[^1];

        if(Math.Abs(position.x - lastPosition.x) < pathErrorMargin)
            position.x = lastPosition.x;

        if(Math.Abs(position.y - lastPosition.y) < pathErrorMargin)
            position.y = lastPosition.y;

        var portY = Enviroment.GateList
            .Where(gate => Enviroment.GatePositions[gate.Id].X > position.x)
            .OrderBy(gate => Enviroment.GatePositions[gate.Id].X)
            .SelectMany(gate => gate.GetPortAndPositions(Enviroment).Select(gate => gate.Item2.Item2))
            .FirstOrDefault(y => Math.Abs(y - position.y) < pathErrorMargin);

        if(portY != 0)
            position.y = portY;

        if(position.x == lastPosition.x && position.y == lastPosition.y)
            return lastPosition;

        return position;
    }
}
