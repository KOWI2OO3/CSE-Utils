using CSEUtils.Proposition.Module.Domain.Propositions;
using CSEUtils.Proposition.Module.Logic;

namespace CSEUtils.Propsition.Module.Tests.Logic;

public class PropositionReaderTest
{
    [Test]
    public void EvaluateEqualPriorityTest() {
        var proposition = PropositionReader.EvaluatePriority("a | b & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("a|b&c"));
    }

    [Test]
    public void EvaluateHigherPriorityTest() {
        var proposition = PropositionReader.EvaluatePriority("a ⇒ b & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("a⇒(b&c)"));
    }

    [Test]
    public void EvaluateLowerPriorityTest() {
        var proposition = PropositionReader.EvaluatePriority("a | b ⇒ c");
        Assert.That(proposition?.ToString(), Is.EqualTo("(a|b)⇒c"));
    }

    [Test]
    public void EvaluateUnaryPriorityTest() {
        var proposition = PropositionReader.EvaluatePriority("-a | b");
        Assert.That(proposition?.ToString(), Is.EqualTo("(-a)|b"));
    }

    [Test]
    public void EvaluateUnaryEqualPriorityTest() {
        var proposition = PropositionReader.EvaluatePriority("-a | b & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("(-a)|b&c"));
    }

    [Test]
    public void EvaluateUnaryHigherPriorityTest() {
        var proposition = PropositionReader.EvaluatePriority("-a ⇒ b & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("((-a))⇒(b&c)"));
    }

    [Test]
    public void EvaluatePriorityTest() {
        var proposition = PropositionReader.EvaluatePriority("a | -b & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("a|(-b)&c"));
    }

    [Test]
    public void EvaluateMultiUnaryPriorityTest() {
        var proposition = PropositionReader.EvaluatePriority("a | -b & -c");
        Assert.That(proposition?.ToString(), Is.EqualTo("a|(-b)&(-c)"));
    }

    [Test]
    public void EvaluatePriority2LevelsTest() {
        var proposition = PropositionReader.EvaluatePriority("a ⇒ -b & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("a⇒((-b)&c)"));
    }
    
    [Test]
    public void EvaluatePriority2LevelsTestReversed() {
        var proposition = PropositionReader.EvaluatePriority("a | -b ⇒ c");
        Assert.That(proposition?.ToString(), Is.EqualTo("(a|(-b))⇒c"));
    }

    [Test]
    public void EvaluatePriorityLayeredSameLevelTest() {
        var proposition = PropositionReader.EvaluatePriority("a | (b & c)");
        Assert.That(proposition?.ToString(), Is.EqualTo("a|(b&c)"));
    }

    [Test]
    public void EvaluatePriorityLayeredMultipleLevelTest() {
        var proposition = PropositionReader.EvaluatePriority("a | -(b & c)");
        Assert.That(proposition?.ToString(), Is.EqualTo("a|(-(b&c))"));
    }

    [Test]
    public void EvaluateBracketedProposition() {
        var proposition = PropositionReader.EvaluatePriority("(a | -b) & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("(a|(-b))&c"));
    }

    [Test]
    public void ReadSingleCharVariableTest() {
        int pointer = 0;
        var variable = PropositionReader.ReadVariable("a", ref pointer);
        Assert.That(variable, Is.TypeOf<PropositionalVariable>());
        Assert.That(variable.VariableKey, Is.EqualTo("a"));
    }

    [Test]
    public void ReadMultiCharVariableTest() {
        int pointer = 0;
        var variable = PropositionReader.ReadVariable("abc", ref pointer);
        Assert.That(variable, Is.TypeOf<PropositionalVariable>());
        Assert.That(variable.VariableKey, Is.EqualTo("abc"));
    }

    [Test]
    public void ReadUnaryProposition() {
        var proposition = PropositionReader.Read("-a");
        Assert.That(proposition, Is.TypeOf<Not>());
    }

    [Test]
    public void ReadUnaryWithSpacesProposition() {
        var proposition = PropositionReader.Read("- a");
        Assert.That(proposition, Is.TypeOf<Not>());
    }

    [Test]
    public void ReadBinaryProposition() {
        var proposition = PropositionReader.Read("a|b");
        Assert.That(proposition, Is.TypeOf<Or>());
    }

    [Test]
    public void ReadUnaryBinaryProposition() {
        var proposition = PropositionReader.Read("-a|b");
        Assert.That(proposition, Is.TypeOf<Or>());
    }

    [Test]
    public void ReadBinaryUnaryProposition() {
        var proposition = PropositionReader.Read("a|-b");
        Assert.That(proposition, Is.TypeOf<Or>());
    }

    [Test]
    public void ReadBracketsPropositionTest() {
        var proposition = PropositionReader.Read("a | -(b & c)");
        Assert.That(proposition?.ToString(), Is.EqualTo("a ∨ (¬(b ∧ c))"));
    }

    [Test]
    public void ReadComplexProposition() {
        var proposition = PropositionReader.Read("a | -b & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("a ∨ ((¬b) ∧ c)"));
    }

    [Test]
    public void ReadBracketedProposition() {
        var proposition = PropositionReader.Read("(a | -b) & c");
        Assert.That(proposition?.ToString(), Is.EqualTo("(a ∨ (¬b)) ∧ c"));
    }

}
