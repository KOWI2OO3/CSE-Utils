namespace KOWI2003.TagWrapper.Element;

public record BoundingClientRect(double Left, double Right, double Top, double Bottom) 
{
    public double Width => Right - Left;

    public double Height => Bottom - Top;
}
