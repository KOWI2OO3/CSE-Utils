using CSEUtils.Proposition.Module.Domain.Propositions;

namespace CSEUtils.Propsition.Module.Tests.Domain;

public class PropositionTest
{
    [Test]
    public void TestToString() {
        var proposition = new And();
        proposition.AddParameter(new Variable("a"));
        proposition.AddParameter(new Variable("b"));
        Assert.That(proposition.ToString(), Is.EqualTo("a ∧ b"));
    }

    [Test]
    public void TestComposite1ToString() {
        var notProposition = new Not();
        notProposition.AddParameter(new Variable("b"));

        var proposition = new And();
        proposition.AddParameter(new Variable("a"));
        proposition.AddParameter(notProposition);
        Assert.That(proposition.ToString(), Is.EqualTo("a ∧ (¬b)"));
    }

    [Test]
    public void TestComposite2ToString() {
        var notProposition = new Not();
        notProposition.AddParameter(new Variable("a"));

        var proposition = new And();
        proposition.AddParameter(notProposition);
        proposition.AddParameter(new Variable("b"));
        Assert.That(proposition.ToString(), Is.EqualTo("(¬a) ∧ b"));
    }


}
