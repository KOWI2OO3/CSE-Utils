namespace CSEUtils.LogicSimulator.Module.Logic.Extensions;

public static class ListHelper
{
    public static void RemoveGate(this List<Guid> gateIds, Guid id) {
        for(var i = 0; i < gateIds.Count; i++)
            if(gateIds[i] == id) gateIds[i] = Guid.Empty;
    }

}
