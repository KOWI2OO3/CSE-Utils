using CSEUtils.Proposition.Module.Domain;
using CSEUtils.Proposition.Module.Logic.Extensions;

namespace CSEUtils.Proposition.Module.Logic;

public static class PropositionSimplifier
{

    /// <summary>
    /// Get the terms for which the proposition is true, also called the minterms
    /// </summary>
    /// <param name="proposition">The proposition to get the true terms of </param>
    /// <returns></returns>
    public static (string[], List<string>) GetTrueTerms(this IProposition proposition, List<IProposition>? constraints = null)
    {
        string[] order = [.. proposition.GetVariables()];
        var trueValues = proposition.GetTruthTable()
            .Where(x => (constraints?.Any(constraint => !constraint.Solve(x.Item1)) ?? false) || x.Item2)
            .Select(x => GetBinaryTerm(order, x.Item1))
            .ToList();
        return (order, trueValues);
    } 
    
    /// <summary>
    /// Gets a list of all of the invalid inputs which result in 'don't care' based on the constraints
    /// </summary>
    /// <param name="proposition">The original proposition to check the inputs for</param>
    /// <param name="order">The order of the inputs</param>
    /// <param name="constraints">The constraints to test for</param>
    /// <returns>a list of all of the inputs being valid in integer format in the order given</returns>
    public static HashSet<int> GetAllInvalids(this IProposition proposition, string[] order, List<IProposition>? constraints = null)
    {
        if(constraints == null)
            return [];

        return proposition.GetAllPossibilities()
            .Where(possibility => constraints.Any(constraints => !constraints.Solve(possibility)))
            .Select(possibility => Convert.ToInt32(GetBinaryTerm(order, possibility), 2))
            .ToHashSet();
    }

    /// <summary>
    /// Validates the constraints based on their input variables and the input variables of the proposition
    /// </summary>
    /// <param name="proposition">The original proposition</param>
    /// <param name="constraint">The constraint</param>
    /// <returns>True if the constraint is valid, false otherwise</returns>
    public static bool ValidateConstraint(this IProposition proposition, IProposition constraint)
    {
        var variables = proposition.GetVariables();
        return constraint.GetVariables().All(variables.Contains);
    }

    /// <summary>
    /// Get the binary term for a given possibility
    /// </summary>
    /// <param name="order">Defines the order of the binary representation</param>
    /// <param name="possibility">The dictionary containing all of the states for the difference variables</param>
    /// <returns>The binary representation of the possibility</returns>
    private static string GetBinaryTerm(string[] order, Dictionary<string, bool> possibility)
    {
        var result = "";
        foreach (var entry in order)
        {
            result += possibility[entry] ? "1" : "0";
        }
        return result;
    }

    /// <summary>
    /// Simplifies the proposition as far as possible using the quine mccluskey
    /// </summary>
    /// <param name="proposition">The proposition to simplify</param>
    /// <param name="constraints">The constraints of the proposition inputs</param>
    /// <returns>A simplified proposition string</returns>
    public static string Simplify(this IProposition proposition, List<IProposition>? constraints = null) 
    {
        constraints = constraints?.Where(proposition.ValidateConstraint).ToList();
        var trueterms = proposition.GetTrueTerms(constraints);
        return Simplify(trueterms, proposition.GetAllInvalids(trueterms.Item1, constraints));
    } 

    /// <summary>
    /// Simplifies the proposition as far as possible using the quine mccluskey
    /// </summary>
    /// <param name="terms">The a tuple of the order of the variables and a list terms for which the proposition is true or 'dont care'</param>
    /// <param name="invalid">The invalid prime implicants used to simplify with constraints</param>
    /// <returns>A simplified proposition string</returns>
    public static string Simplify(this (string[] order, List<string> minterms) terms, HashSet<int>? invalid = null)
    {
        var groupedMinterms = GetGroupedMinterms(terms.minterms);
        var simplified = GetPrimeImplicants(groupedMinterms);
        return ConstructProposition(terms.order, SolvePiTable(simplified, invalid));
    }

    public static string ConstructProposition(string[] order, List<string> primeImplicants)
    {
        var products = new List<string>();
        foreach (var implicants in primeImplicants)
        {
            var product = new List<string>();
            for (int i = 0; i < implicants.Length; i++)
            {
                if(implicants[i] == '-')
                    continue;

                product.Add(implicants[i] == '1' ? order[i] : $"!{order[i]}");
            }
            if(implicants.Count(x => x == '1' || x == '0') <= 1)
                products.Add(string.Join(" & ", product));
            else
                products.Add($"({string.Join(" & ", product)})");
        }
        var result = string.Join(" | ", products);
        return string.IsNullOrEmpty(result) ? "T" : result;
    }

    /// <summary>
    /// Get the prime implicants groups for a given list of minterms
    /// </summary>
    /// <param name="minterms">All the minterms for a proposition</param>
    /// <returns>a dictionary mapping the amount of 1's in a binary representation to a group of minterms</returns>
    private static Dictionary<int, List<string>> GetGroupedMinterms(List<string> minterms)
    {
        var primeImplicants = new Dictionary<int, List<string>>();
        foreach (var minterm in minterms)
        {
            var index = minterm.Count(x => x == '1');
            if(!primeImplicants.TryGetValue(index, out List<string>? value))
                primeImplicants[index] = value = [];
            
            value.Add(minterm);
        }
        return primeImplicants;
    }
    
    /// <summary>
    /// Perform the first step of the quine mccluskey algorithm on a given list of minterms
    /// Get the prime implicants for a given list of minterms using the quine mccluskey algorithm
    /// </summary>
    /// <param name="minterms">The minterms which include all terms for which the proposition is true or 'dont care'</param>
    /// <returns>A list of the compacted implicants (eg. "-00-")</returns>
    public static List<string> GetPrimeImplicants(Dictionary<int, List<string>> minterms) 
    {
        var hasChanged = false;
        do
        {
            hasChanged = GetNextLayer(minterms, out var result);
            minterms = result;
        }while(hasChanged);
        return minterms.SelectMany(x => x.Value).Distinct().ToList();
    }

    /// <summary>
    /// Get the prime implicants for a given list of minterms
    /// </summary>
    /// <param name="minterms"></param>
    /// <returns>The amount of changed values</returns>
    public static bool GetNextLayer(Dictionary<int, List<string>> minterms, out Dictionary<int, List<string>> result)
    {
        var handled = new HashSet<string>();

        var hasChanged = false;

        result = [];
        foreach (var key in minterms.Keys.Order())
        {
            var current = minterms[key];
            if(!minterms.TryGetValue(key + 1, out var next))
            {
                // Handling the last layer
                var list = current.Where(x => !handled.Contains(x)).ToList();
                if(list.Count > 0)
                    result[key] = list;
                continue;
            }

            foreach (var minterm in current)
            {
                foreach (var nextterm in next)
                {
                    var differIndex = CompareBinaries(minterm, nextterm);
                    if(differIndex == -1)
                        continue;
                    handled.Add(minterm);
                    handled.Add(nextterm);
                    hasChanged = true;

                    var array = minterm.ToCharArray();
                    array[differIndex] = '-';

                    var oneCount = array.Count(x => x == '1');
                    var resultingTerm = new string(array);

                    if(!result.ContainsKey(oneCount))
                        result.TryAdd(oneCount, []);
                    result[oneCount].Add(resultingTerm!);
                }

                // Add the minterm to the next layer if it has not been handled yet
                if(!handled.Contains(minterm))
                {
                    if(!result.ContainsKey(key))
                        result.TryAdd(key, []);
                    result[key].Add(minterm);
                }
            }
        }

        result = result.Where(x => x.Value.Count > 0).ToDictionary(x => x.Key, y => y.Value.Distinct().ToList());

        return hasChanged;
    }

    /// <summary>
    /// Compares 2 equal length strings with one another, and returns the index where they differ iff they differ on a single index, otherwise -1
    /// </summary>
    /// <param name="s1">one of the strings to test</param>
    /// <param name="s2">the other string to test</param>
    /// <returns>the index at which they differ if they differ on a single index, -1 otherwise</returns>
    public static int CompareBinaries(string s1, string s2) 
    {
        if(s1.Length != s2.Length)
            return -1;

        int result = -1;
        for(int i = 0; i < s1.Length; i++)
        {
            if(s1[i] == s2[i])
                continue;
            
            if(result != -1)
                return -1;

            result = i;
        }
        return result;
    }

    /// <summary>
    /// Solves the PI-Table of the quine mccluskey algorithm
    /// </summary>
    /// <param name="implicants">The simplified implicants given to the table</param>
    /// <param name="invalid">The invalid prime implicants used to simplify with constraints</param>
    /// <returns></returns>
    public static List<string> SolvePiTable(List<string> implicants, HashSet<int>? invalids = null)
    {
        var terms = GetPrimeImplicantTerms(implicants);

        // Remove all invalids from the terms
        if(invalids != null)
            terms = terms.Where(entry => entry.Value.Any(x => !invalids.Contains(x))).ToDictionary();
        
        // Different data structure making it easier to retrieve the implicants for a given term
        var inverted = InvertDictionary(terms);

        // Include all essential implicants in the result
        var single = inverted.Where(entry => entry.Value.Count == 1);
        var covered = single.Select(entry => entry.Key).ToHashSet();
        var essentialImplicants = single.Select(entry => entry.Value.First()).ToList() ?? [];

        var handled = essentialImplicants.SelectMany(x => terms[x]).ToHashSet();

        var missing = inverted.Where(entry => !handled.Contains(entry.Key)).ToDictionary(x => x.Key, y => y.Value);
        var coveredMissing = new HashSet<int>();

        // Scoring secundary implicants based on how many missing terms they cover
        var secundaryImplicants = new List<string>();
        foreach(var (implicant, expressions) in missing)
        {
            var best = expressions.Select(expression => (expression, terms[expression]))
                .Select(x => (x.expression, x.Item2.Count(imp => missing.ContainsKey(imp))))
                .MaxBy(x => x.Item2);
            secundaryImplicants.Add(best.expression);

            _ = terms[best.expression].All(coveredMissing.Add);
        }

        // Order the secundary implicants based on how many missing terms they cover
        var orderedSecundaries = secundaryImplicants.Select(expression => (expression, terms[expression]))
                .Select(x => (x.expression, x.Item2.Count(imp => missing.ContainsKey(imp))))
                .OrderByDescending(x => x.Item2);

        // Include the best secundary implicants in the result
        var result = new List<string>();
        coveredMissing.Clear();
        foreach (var entry in orderedSecundaries)
        {
            if(terms[entry.expression].All(coveredMissing.Contains))
                continue;

            result.Add(entry.expression);
            _ = terms[entry.expression]
                .Where(missing.ContainsKey)
                .All(coveredMissing.Add);

            if(coveredMissing.Count >= missing.Count)
                break;
        }

        // Combine the essential and secundary implicants
        return result.Union(essentialImplicants).Distinct().ToList();
    }

    /// <summary>
    /// A simple helper method to invert a dictionary with a collection as the value
    /// </summary>
    /// <param name="data">A dictionary with a collection as value</param>
    /// <returns>The inverted dictionary</returns>
    public static Dictionary<int, HashSet<string>> InvertDictionary(Dictionary<string, HashSet<int>> data)
    {
        var result = new Dictionary<int, HashSet<string>>();
        foreach (var (key, value) in data)
        {
            foreach (var item in value)
            {
                if(!result.TryGetValue(item, out var set))
                    result[item] = set = [];
                set.Add(key);
            }
        }
        return result;
    }
    
    /// <summary>
    /// Get the decimal numbers correlating with the implicants
    /// </summary>
    /// <param name="implicants">The implicants to get the decimal numbers for</param>
    /// <returns></returns>
    public static Dictionary<string, HashSet<int>> GetPrimeImplicantTerms(List<string> implicants)
    {
        var handled = new HashSet<string>();
        return implicants.Select(implicant => (implicant, 
                GetVariants(implicant)
                    .Where(variant => !handled.Contains(variant))
                    .Select(variant => Convert.ToInt32(variant, 2))
                    .ToHashSet()
            ))
            .ToDictionary(x => x.implicant, y => y.Item2);
    }

    /// <summary>
    /// Get the variants of a given implicant
    /// </summary>
    public static string[] GetVariants(string implicant) 
    {
        var indexes = new List<int>();
        for(int i = 0; i < implicant.Length; i++)
        {
            if(implicant[i] == '-')
                indexes.Add(i);
        }

        var result = new string[(int)Math.Pow(2, indexes.Count)];
        for(int i = 0; i < result.Length; i++)
        {
            var binary = Convert.ToString(i, 2).PadLeft(indexes.Count, '0');
            var array = implicant.ToCharArray();
            for(int j = 0; j < indexes.Count; j++)
            {
                array[indexes[j]] = binary[j];
            }
            result[i] = new string(array);
        }
        return result;
    }
}
