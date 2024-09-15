using System.Text.Json;
using CSEUtils.Proposition.Module.Domain.Propositions;
using CSEUtils.Proposition.Module.Logic;

namespace CSEUtils.Propsition.Module.Tests.Logic;

public class PropositionSimplifierTest
{
    [Test]
    public void GetTrueTermsSimpleTest()
    {
        var proposition = PropositionHandler.GetProposition('&', new Variable("a"), new Variable("b"));
        var (order, minTerms) = proposition!.GetTrueTerms();
        Assert.That(order, Is.EqualTo(new string[] { "a", "b" }));
        Assert.That(minTerms, Has.Count.EqualTo(1));
        Assert.That(minTerms, Is.EqualTo(new List<string>(["11"])));
    }

    [Test]
    public void GetTrueTermsComplexTest()
    {
        var notA = PropositionHandler.GetProposition('!', new Variable("a"));
        var proposition = PropositionHandler.GetProposition('&', new Variable("a"), notA!);
        var (order, minTerms) = proposition!.GetTrueTerms();
        Assert.That(minTerms, Has.Count.EqualTo(0));
        Assert.That(minTerms, Is.Empty);
    }

    [Test]
    public void CompareBinariesTest()
    {
        var s1 = "0000";
        var s2 = "0001";

        var index = PropositionSimplifier.CompareBinaries(s1, s2);
        Assert.That(index, Is.EqualTo(3));
    }

    [Test]
    public void CompareBinariesToManyTest()
    {
        var s1 = "0010";
        var s2 = "0001";

        var index = PropositionSimplifier.CompareBinaries(s1, s2);
        Assert.That(index, Is.EqualTo(-1));
    }

    [Test]
    public void GetNextLayerTest()
    {
        var expected = new Dictionary<int, List<string>>() 
        {
            {0, ["-000", "000-"]}
        }; 

        var data = new Dictionary<int, List<string>>() 
        {
            {0, ["0000"]},
            {1, ["1000", "0001"]}
        };
        var changed = PropositionSimplifier.GetNextLayer(data, out var result);
        Assert.That(changed, Is.True);
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void GetPrimeImplicantsSimpleTest()
    {
        var expected = new string[] {"-000", "000-"};

        var data = new Dictionary<int, List<string>>() 
        {
            {0, ["0000"]},
            {1, ["1000", "0001"]}
        };
        var result = PropositionSimplifier.GetPrimeImplicants(data);
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void GetPrimeImplicants2LayerTest()
    {
        var expected = new string[] {"-00-"};

        var data = new Dictionary<int, List<string>>() 
        {
            {0, ["0000"]},
            {1, ["1000", "0001"]},
            {2, ["1001"]}
        };
        var result = PropositionSimplifier.GetPrimeImplicants(data);
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void GetPrimeImplicants3LayerTest()
    {
        var expected = new string[] {"-0--", "0-00"};

        var data = new Dictionary<int, List<string>>() 
        {
            {0, ["0000"]},
            {1, ["1000", "0001", "0010", "0100"]},
            {2, ["1001", "1010", "0011"]},
            {3, ["1011"]}
        };
        var result = PropositionSimplifier.GetPrimeImplicants(data);
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void ConstructPropositionTest()
    {
        var order = "a b c d".Split(" ");
        var primeImplicants = new List<string>
        {
            "-000", "-1--", "0110"
        };
        var result = PropositionSimplifier.ConstructProposition(order, primeImplicants);
        Console.WriteLine(result);
        Assert.That(result, Is.EqualTo("(!b & !c & !d) | b | (!a & b & c & !d)"));
        Assert.That(result.Replace(" ", ""), Is.EqualTo("(!b&!c&!d)|b|(!a&b&c&!d)"));
    }

    [Test]
    public void SimplifyProposition()
    {
        var proposition = PropositionReader.Read("(a → b) ∧ b");
        var result = proposition!.Simplify();
        Assert.That(result, Is.EqualTo("b"));
    }

    [Test]
    public void SimplifyEdgeProposition()
    {
        var proposition = PropositionReader.Read("(a → b) ∨ ¬b");
        var result = proposition!.Simplify();
        Assert.That(result, Is.EqualTo("T"));
    }

}