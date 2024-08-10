namespace CSEUtils.App.Shared.Domain;

public record Vector2(double X, double Y)
{
    public Vector2() : this(0, 0) { }

    public static Vector2 Zero => new(0, 0);
    public static Vector2 One => new(1, 1);

    public double Length => Math.Sqrt(X * X + Y * Y);

    public static Vector2 operator +(Vector2 vec1, Vector2 vec2) => new(vec1.X + vec2.X, vec1.Y + vec2.Y);
    public static Vector2 operator -(Vector2 vec1, Vector2 vec2) => new(vec1.X - vec2.X, vec1.Y - vec2.Y);

    public static double operator *(Vector2 vec1, Vector2 vec2) => vec1.X * vec2.X + vec1.Y * vec2.Y;
    public static Vector2 operator *(Vector2 vec, double scalar) => new(vec.X * scalar, vec.Y * scalar);

    public static Vector2 operator /(Vector2 vec, double scalar) => new(vec.X / scalar, vec.Y / scalar);

    public static implicit operator (double, double)(Vector2 vec) => (vec.X, vec.Y);
    public static implicit operator Vector2((double, double) vec) => new(vec.Item1, vec.Item2);
    
    public static implicit operator (int, int)(Vector2 vec) => ((int)vec.X, (int)vec.Y);
    public static implicit operator Vector2((int, int) vec) => new(vec.Item1, vec.Item2);
}
