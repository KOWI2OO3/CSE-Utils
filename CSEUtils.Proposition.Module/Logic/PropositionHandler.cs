using System.Reflection;
using CSEUtils.Proposition.Module.Domain;
using CSEUtils.Proposition.Module.Logic.Extensions;

namespace CSEUtils.Proposition.Module.Logic;

public static class PropositionHandler
{
    private static readonly Dictionary<char, Type> operators = 
        typeof(PropositionHandler).Assembly.GetExportedTypes()
            .Select(type => (type, type.GetCustomAttribute<PropositionAttribute>()?.Aliases))
            .Where(tuple => tuple.Aliases != null)
            .SelectMany(tuple => tuple.Aliases!.Select(alias => (alias, tuple.type)))
            .ToDictionary(tuple => tuple.alias, tuple => tuple.type);

    /// <summary>
    /// Get a proposition from a character and add the operands to it
    /// </summary>
    /// <param name="operatorSymbol"> The character representing the operator </param>
    /// <param name="operands"> The operands to add to the proposition </param>
    /// <returns> The proposition </returns>
    public static IProposition? GetProposition(char operatorSymbol, params IProposition[] operands) {
        if(operators.TryGetValue(operatorSymbol, out var type) && Activator.CreateInstance(type, operands) is IProposition prop) {
            if(prop is IParamatized paramatized) {
                foreach (var operand in operands) 
                    paramatized.AddParameter(operand);
            }
            return prop;
        }
        return null;
    }

    public static Type GetPropositionType(char operatorSymbol) {
        return operators.TryGetValue(operatorSymbol, out var type) ? type : typeof(object);
    }

    public static bool IsOperator(this char symbol) => operators.ContainsKey(symbol);

    public static int GetOperatorPriority(this char symbol) 
    {
        if(!operators.TryGetValue(symbol, out var type)) return 0;
        return type.GetCustomAttribute<PropositionAttribute>()?.Priority ?? 1;
    }
    
    public static List<(char, string)> OperatorsInfo => operators
        .Select(entry => entry.Value)
        .Distinct()
        .Select(
            type => (PropositionHelper.PrimaryOperator(type), type.Name)
        )
        .ToList();

}
