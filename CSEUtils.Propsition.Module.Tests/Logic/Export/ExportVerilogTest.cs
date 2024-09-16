using CSEUtils.Proposition.Module.Domain.Propositions;
using CSEUtils.Proposition.Module.Logic;
using CSEUtils.Proposition.Module.Utils;

namespace CSEUtils.Propsition.Module.Tests.Logic.Export;

public class ExportVerilogTest
{

    // [Test]
    // public void TestSimpleExport()
    // {
    //     var proposition = PropositionHandler.GetProposition('*', new Variable("A"), new Variable("B"));
    //     var export = new ExportVerilog().Export(proposition!);
    //     Assert.That(export, Does.EndWith(
    //         """
    //         module proposition (
    //             input wire A, 
    //             input wire B, 
    //             output wire out
    //         );
    //             and and0 (A, B, out);

    //         endmodule
    //         """.Trim()
    //     ));
    // }

    [Test]
    public void ExperimentalTestExport()
    {
        var innerLeftAnd = PropositionHandler.GetProposition('*', new Variable("A"), new Variable("B"));
        var innerRightAnd = PropositionHandler.GetProposition('*', new Variable("C"), new Variable("B"));
        var proposition = PropositionHandler.GetProposition('+', innerLeftAnd!, innerRightAnd!);
        var export = new ExportVerilog().Export(proposition!);
        Console.WriteLine(export);
        // Assert.AreEqual("module proposition (\n\tinput wire A, \n\tinput wire B, \n\toutput wire out\n);\nand and0 (A, B, p0);\nendmodule", export);
    }

    [Test]
    public void ExperimentalComplexTestExport()
    {
        var innerLeftAnd = PropositionHandler.GetProposition('→', new Variable("A"), new Variable("B"));
        var innerRightAnd = PropositionHandler.GetProposition('*', new Variable("C"), new Variable("B"));
        var innerNot = PropositionHandler.GetProposition('¬', innerRightAnd!);
        var proposition = PropositionHandler.GetProposition('+', innerLeftAnd!, innerNot!);
        var export = new ExportVerilog().Export(proposition!);
        Console.WriteLine(export);
    }

}
