namespace CSEUtils.Interface;

public class Settings
{
    public static Settings Default { get; set;} = new();

    public bool IsDarkMode { get; set; } = true;

}
