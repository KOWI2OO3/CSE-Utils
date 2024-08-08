using CSEUtils.LogicSimulator.Module.Domain;

namespace CSEUtils.LogicSimulator.Module.Logic.Extensions;

public static class EnviromentHelper
{
    public static void RemoveGate(this LogicEnviroment env, LogicGate gate) => env.RemoveGate(gate.Id);

    public static void AddConnection(this LogicEnviroment env, Port input, Port output) =>
        env.AddConnection(new(input, output));

    public static void RemoveConnection(this LogicEnviroment env, Port input, Port output) =>
        env.RemoveConnection(new(input, output));
}
