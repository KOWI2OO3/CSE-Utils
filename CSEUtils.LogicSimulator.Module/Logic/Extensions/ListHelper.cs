namespace CSEUtils.LogicSimulator.Module.Logic.Extensions;

public static class ListHelper
{
    public static void RemoveGate(this List<Guid> gateIds, Guid id) {
        for(var i = 0; i < gateIds.Count; i++)
            if(gateIds[i] == id) gateIds[i] = Guid.Empty;
    }

    public static List<T> CreateList<T>(int capacity) {
        var result = new List<T>(capacity);
        var requireNonnull = Nullable.GetUnderlyingType(typeof(T)) == null;

        var defaultValue = default(T);
        if(requireNonnull)
            defaultValue ??= Activator.CreateInstance<T>();

#pragma warning disable CS8604 // Possible null reference argument.

        for (int i = 0; i < capacity; i++)
            result.Add(defaultValue);

#pragma warning restore CS8604 // Possible null reference argument.

        return result;
    } 

}
