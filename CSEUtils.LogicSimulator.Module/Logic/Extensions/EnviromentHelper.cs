using CSEUtils.LogicSimulator.Module.Domain;

namespace CSEUtils.LogicSimulator.Module.Logic.Extensions;

public static class EnviromentHelper
{
    public static void RemoveGate(this Enviroment env, LogicGate gate) => env.RemoveGate(gate.Id);

    public static void AddConnection(this Enviroment env, Connection connection) =>
        env.AddConnection(connection.Input, connection.Output);

    public static void RemoveConnection(this Enviroment env, Connection connection) =>
        env.RemoveConnection(connection.Input, connection.Output);
}
