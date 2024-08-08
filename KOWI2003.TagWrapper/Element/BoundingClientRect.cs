namespace KOWI2003.TagWrapper.Element;

public record BoundingClientRect(int Left, int Right, int Top, int Bottom) 
{
    public int Width => Right - Left;

    public int Height => Bottom - Top;
}
