using CSEUtils.LogicSimulator.Module.Domain;

namespace CSEUtils.LogicSimulator.Module.Logic.Extensions;

public static class ListHelper
{
    public static void RemoveGate(this List<Connection> connections, Guid id) {
        var connectionsToRemove = new List<Connection>();
        for(int i = 0; i < connections.Count; i++) 
        {
            var entry = connections[i];
            if(entry.Input.GateId == id || 
                entry.Output.GateId == id)
                connectionsToRemove.Add(entry);
        }
        foreach (var connection in connectionsToRemove)
            connections.Remove(connection);
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
