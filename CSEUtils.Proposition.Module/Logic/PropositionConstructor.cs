using CSEUtils.Proposition.Module.Domain;

namespace CSEUtils.Proposition.Module.Logic;

public class PropositionConstructor
{
    /// <summary>
    /// Creates a proposition from the minterms and variables.
    /// The variables should be as much as the bit representation of the minterms.
    /// </summary>
    /// <param name="terms">The list of minterms as a string seperated by comma</param>
    /// <param name="variables">the variables of the function as string seperated by comma</param>
    /// <returns></returns>
    public static string CreateStringFromMinTerms(string terms, string variables)
    {
        var vars = variables.Replace(" ", string.Empty).Split(',').ToArray();
        var minterms = terms.Split(',')
            .Select(int.Parse)
            .Select(x => x.ToString("B").PadLeft(vars.Length, '0'))
            .ToList();
        var proposition = PropositionSimplifier.ConstructProposition(vars, minterms);
        return proposition;
    }

    
    /// <summary>
    /// Creates a proposition from the minterms and variables.
    /// The variables should be as much as the bit representation of the minterms.
    /// </summary>
    /// <param name="terms">The list of minterms as a string seperated by comma</param>
    /// <param name="variables">the variables of the function as string seperated by comma</param>
    /// <returns></returns>
    public static IProposition? CreateFromMinTerms(string terms, string variables) =>
        PropositionReader.Read(CreateStringFromMinTerms(terms, variables));

    /// <summary>
    /// Creates a proposition from the maxterms and variables.
    /// The variables should be as much as the bit representation of the maxterms.
    /// </summary>
    /// <param name="terms">The list of maxterms as a string seperated by comma</param>
    /// <param name="variables">the variables of the function as string seperated by comma</param>
    /// <returns></returns>
    public static string CreateStringFromMaxTerms(string terms, string variables)
    {
        var vars = variables.Replace(" ", string.Empty).Split(',').ToArray();
        var termsCount = Math.Pow(2, vars.Length);
        var termSplits = terms.Replace(" ", string.Empty).Split(',');
        var minTerms = Enumerable.Range(0, (int)termsCount)
            .Select(x => x.ToString())
            .Where(x => !termSplits.Contains(x))
            .ToList();

        return CreateStringFromMinTerms(string.Join(", ", minTerms), variables);
    }

    
    /// <summary>
    /// Creates a proposition from the maxterms and variables.
    /// The variables should be as much as the bit representation of the maxterms.
    /// </summary>
    /// <param name="terms">The list of maxterms as a string seperated by comma</param>
    /// <param name="variables">the variables of the function as string seperated by comma</param>
    /// <returns></returns>
    public static IProposition? CreateFromMaxTerms(string terms, string variables) =>
        PropositionReader.Read(CreateStringFromMaxTerms(terms, variables));

}
