using CSEUtils.Proposition.Module.Domain;
using CSEUtils.Proposition.Module.Domain.Propositions;
using CSEUtils.Proposition.Module.Logic.Extensions;

namespace CSEUtils.Proposition.Module.Utils;

public class ExportVerilog : IExportProposition
{
    public string Extension => throw new NotImplementedException();

    public string Export(IProposition proposition)
    {
        var result = ExportVerilogModules();
        var variables = proposition.GetVariables();

        var moduelDefinition = "\n\nmodule proposition (\n";
        foreach (var variable in variables)
        {
            moduelDefinition += $"\tinput wire {variable}, \n";
        }
        result += moduelDefinition + "\toutput wire out\n);\n";
        
        var count = 0;
        var operatorCount = 0;
        var expression = string.Empty;
        
        var stack = new Stack<(IProposition, string)>();
        stack.Push((proposition, "out"));
        while (stack.Count > 0)
        {
            var (current, outParameter) = stack.Pop();
            switch (current)
            {
                case BinaryOperator binaryOperator:
                    expression = $"\t{WriteBinaryOperator(binaryOperator, stack, outParameter, ref count, ref operatorCount)}\n{expression}";
                    break;
                case Not not:
                    var p = ParameterReference(not.P, stack, ref count);
                    expression = $"\tnot ({p}, {outParameter});\n{expression}";
                    break;
                
                default: break;
            }
        }

        if(count > 0)
            result += $"\twire [{count}:0] p;\n";
        
        result += expression;

        return result + "\nendmodule";
    }

    private static string WriteBinaryOperator(BinaryOperator binaryOperator, Stack<(IProposition, string)> stack, string outParameter, ref int count, ref int operatorCount)
    {   
        var p1 = ParameterReference(binaryOperator.P, stack, ref count);
        var p2 = ParameterReference(binaryOperator.Q, stack, ref count);

        return binaryOperator switch
        {
            And => $"and ({p1}, {p2}, {outParameter});",
            Or => $"or ({p1}, {p2}, {outParameter});",
            Xor => $"xor xor{operatorCount++} (.a({p1}), .b({p2}), .y({outParameter}));",
            Implies => $"implies implies{operatorCount++} (.a({p1}), .b({p2}), .y({outParameter}));",
            Biconditional => $"biconditional biconditional{operatorCount++} (.a({p1}), .b({p2}), .y({outParameter}));",
            _ => throw new FormatException("Proposition is malformed!")
        };
    }

    private static string ParameterReference(IProposition? proposition, Stack<(IProposition, string)> stack, ref int count)
    {
        if(proposition is null)
            throw new FormatException("Proposition is malformed!");
        
        var parameterReference = string.Empty;
        if(proposition is IParamatized and IProposition paramatized) {
            parameterReference = $"p[{count++}]";
            stack.Push((paramatized, parameterReference));
        }
        else if(proposition is Variable variable)
            parameterReference = variable.ToString();

        return parameterReference;
    }

    public static string ExportVerilogModules() => 
        @"
module xor (
    input wire a,
    input wire b,
    output wire y
);
    assign y = ~(a == b);
endmodule

module implies(
    input wire a,
    input wire b,
    output wire y
);
    assign y = ~a | b;
endmodule

module biconditional(
    input wire a,
    input wire b,
    output wire y
);
    assign y = a == b;
endmodule
        ";
}
