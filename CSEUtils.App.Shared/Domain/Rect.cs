namespace CSEUtils.App.Shared.Domain;

public record Rect(Vector2 Position, Vector2 Scale) {

    public Rect(double x, double y, double Width, double Height) : this(new Vector2(x, y), new Vector2(Width, Height)) {}

    public double X => Position.X;
    public double Y => Position.Y;

    public double Width => Scale.X;
    public double Height => Scale.Y;

    public double Left => X;
    public double Right => X + Width;
    public double Top => Y;
    
}
