using System.Collections.Generic;
using System.Globalization;
using System.Security.Cryptography.X509Certificates;
using System.Xml.Linq;
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
            .Where(x => constraints?.All(constraint => constraint.Solve(x.Item1)) ?? true)
            .Where(x => x.Item2)
            .Select(x => GetBinaryTerm(order, x.Item1))
            .ToList();
        return (order, trueValues);
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

    public static string Simplify(this IProposition proposition, List<IProposition>? constraints = null) => Simplify(proposition.GetTrueTerms());

    public static string Simplify(this (string[] order, List<string> minterms) terms)
    {
        var groupedMinterms = GetGroupedMinterms(terms.minterms);
        var simplified = GetPrimeImplicants(groupedMinterms);
        return ConstructProposition(terms.order, SolvePiTable(simplified));
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
    
    public static List<string> GetPrimeImplicants(Dictionary<int, List<string>> minterms) 
    {
        var hasChanged = false;
        do
        {
            hasChanged = GetNextLayer(minterms, out minterms);
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
        foreach (var key in minterms.Keys)
        {
            var current = minterms[key];
            if(!minterms.TryGetValue(key + 1, out var next))
            {
                var list = minterms[key].Where(x => !handled.Contains(x)).ToList();
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
                        result[oneCount] = [];
                    result[oneCount].Add(resultingTerm!);
                }

                // Add the minterm to the next layer if it has not been handled yet
                if(!handled.Contains(minterm))
                {
                    if(!result.ContainsKey(key))
                        result[key] = [];
                    result[key].Add(minterm);
                }
            }
        }

        result = result.Where(x => x.Value.Count > 0).ToDictionary(x => x.Key, y => y.Value);

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

    public static List<string> SolvePiTable(List<string> implicants)
    {
        var terms = GetPrimeImplicantTerms(implicants);
        var inverted = InvertDictionary(terms);

        var single = inverted.Where(entry => entry.Value.Count == 1);
        var covered = single.Select(entry => entry.Key).ToHashSet();
        var essentialImplicants = single.Select(entry => entry.Value.First()).ToList() ?? [];

        var handled = essentialImplicants.SelectMany(x => terms[x]).ToHashSet();

        var missing = inverted.Where(entry => !handled.Contains(entry.Key)).ToDictionary(x => x.Key, y => y.Value);
        var coveredMissing = new HashSet<int>();

        var secundaryImplicants = new List<string>();
        foreach(var (implicant, expressions) in missing)
        {
            var best = expressions.Select(expression => (expression, terms[expression]))
                .Select(x => (x.expression, x.Item2.Count(imp => missing.ContainsKey(imp))))
                .MaxBy(x => x.Item2);
            secundaryImplicants.Add(best.expression);

            _ = terms[best.expression].All(coveredMissing.Add);
        }

        var orderedSecundaries = secundaryImplicants.Select(expression => (expression, terms[expression]))
                .Select(x => (x.expression, x.Item2.Count(imp => missing.ContainsKey(imp))))
                .OrderByDescending(x => x.Item2);

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

        return result.Union(essentialImplicants).Distinct().ToList();
    }

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
