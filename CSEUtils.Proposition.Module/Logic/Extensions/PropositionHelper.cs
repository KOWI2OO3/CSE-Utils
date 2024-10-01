using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Reflection;
using CSEUtils.Proposition.Module.Domain;
using CSEUtils.Proposition.Module.Domain.Propositions;

namespace CSEUtils.Proposition.Module.Logic.Extensions;

public static class PropositionHelper
{
    public static List<string> GetVariables(this IProposition proposition) {
        List<string> variableList = proposition is IParamatized paramatized ? [.. paramatized.Variables] : 
                                    (proposition is Variable variable ? [variable.VariableKey] : []);
        return [.. variableList.OrderDescending()];
    }

    public static List<Dictionary<string, bool>> GetAllPossibilities(this IProposition proposition) {
        var variables = proposition.GetVariables().ToList();
        var result = new List<Dictionary<string, bool>>();
        for (var i = 0; i < Math.Pow(2, variables.Count); i++) {
            var possibility = new Dictionary<string, bool>();
            for (var j = 0; j < variables.Count; j++) {
                possibility[variables[j]] = (i & (1 << j)) != 0;
            }
            result.Add(possibility);
        }
        return result;
    }

    public static char PrimaryOperator(Type propositionType) =>
        propositionType.GetCustomAttribute<PropositionAttribute>()?.Aliases.FirstOrDefault() ?? throw new InvalidOperationException("Proposition does not have a primary operator");

    public static char PrimaryOperator(this IProposition proposition) =>
        PrimaryOperator(proposition.GetType());

    public static char[] Operators(this IProposition proposition) =>
        proposition.GetType().GetCustomAttribute<PropositionAttribute>()?.Aliases ?? throw new InvalidOperationException("Proposition does not have any operators");

    public static List<(Dictionary<string, bool>, bool)> GetTruthTable(this IProposition proposition) {
        return proposition.GetAllPossibilities()
            .Select(option => (option, proposition.Solve(option)))
            .ToList();
    }
}
