using System.Security.Cryptography.X509Certificates;
using CSEUtils.Proposition.Module.Domain;
using CSEUtils.Proposition.Module.Domain.Propositions;

namespace CSEUtils.Proposition.Module.Logic;

public class PropositionReader
{
    public static IProposition? Read(string proposition) {
        int pointer = 0;
        return Read(proposition, ref pointer);
    }

    private static IProposition? Read(string proposition, ref int pointer)
    {
        proposition = proposition.Replace(" ", "");
        IProposition? cache = null;

        while(pointer < proposition.Length) {
            char currentChar = proposition[pointer];
            if(char.IsLetter(currentChar))
                cache = ReadVariable(proposition, ref pointer);
            else if(currentChar.IsOperator())
                cache = ReadProposition(proposition, ref pointer, ref cache);
        }

        return cache;
    }

    public static IProposition ReadProposition(string proposition, ref int pointer, ref IProposition? cache) 
    {
        var result = PropositionHandler.GetProposition(proposition[pointer++], []) ?? throw new FormatException("");
        if(result is BinaryOperator binaryOperator) 
        {
            if(cache == null)
                throw new FormatException("Binary operators should have a variable type on the left side of the operator");
            binaryOperator.AddParameter(cache);
        }
        cache = null;
        if(result is IParamatized paramatized) {
            if(char.IsLetter(proposition[pointer])) 
                paramatized.AddParameter(ReadVariable(proposition, ref pointer));
            else
                paramatized.AddParameter(Read(proposition, ref pointer) ?? throw new FormatException(""));
        }

        return result;
    }

    public static PropositionalVariable ReadVariable(string proposition, ref int pointer)
    {
        var variable = "";
        while(pointer < proposition.Length && char.IsLetter(proposition[pointer])) {
            variable += proposition[pointer];
            pointer++;
        }
        return new(variable);
    }

    public static string EvaluatePriority(string proposition, int pointer = 0) {
        int _pointer = pointer; 
        return EvaluatePriority(proposition, ref _pointer);
    }

    private static string EvaluatePriority(string proposition, ref int pointer) {
        proposition = proposition.Replace(" ", "");
        var opendPriorities = new Stack<int>();
        var lastOperatorPriority = 0;
        var result = "";
        for(; pointer < proposition.Length; pointer++)
        {
            var character = proposition[pointer];

            if(character == '(') {
                pointer++;
                result += $"({EvaluatePriority(proposition, ref pointer)})";
                continue;
            }
            if(character == ')') {
                break;
            }

            if(character.IsOperator()) {
                // Open bracket if higher and close if lower
                var priority = character.GetOperatorPriority();
                
                if(lastOperatorPriority > priority) {
                    for(var i = 0; i < lastOperatorPriority - priority; i++) { 
                        // Close
                        if(opendPriorities.Count == 0)
                            result = $"({result}";
                        opendPriorities.TryPop(out _);
                        result += ")";
                    }
                }

                result += character;

                var next = PeekNextOperator(proposition, pointer+1);
                var nextPriority = next?.GetOperatorPriority();

                if(!(next == null || priority == nextPriority) && nextPriority > priority) {
                    for(int i = 0; i < Math.Max((nextPriority - priority) ?? 1, 1); i++) {
                        // Open
                        opendPriorities.Push(priority);
                        result += "(";
                    }
                }
                
                lastOperatorPriority = priority;
            }else
                result += character;
        }

        foreach (var priority in opendPriorities)
            result += ")";

        return result;
    } 

    private static char? PeekNextOperator(string proposition, int pointer) {
        for(; pointer < proposition.Length; pointer++) {
            var character = proposition[pointer];
            if(character.IsOperator()) 
                return character;
        }
        return null;
    }

}
