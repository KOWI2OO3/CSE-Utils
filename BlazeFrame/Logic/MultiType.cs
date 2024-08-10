namespace BlazeFrame.Logic;

public class MultiType<T, K>
{
    public object? Value { get; private set; }

    protected MultiType(object? value) => Value = value;

    public static implicit operator MultiType<T, K>(T input) => new(input);
    public static implicit operator MultiType<T, K>(K input) => new(input);
}

public class MultiType<T, K, U> : MultiType<T, K>
{
    protected MultiType(object? value) : base(value) {}

    public static implicit operator MultiType<T, K, U>(U input) => new(input);
}

public class MultiType<T, K, U, I> : MultiType<T, K, U>
{
    protected MultiType(object? value) : base(value) {}

    public static implicit operator MultiType<T, K, U, I>(I input) => new(input);
}
