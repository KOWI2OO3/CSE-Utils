using CSEUtils.Proposition.Module.Logic;

namespace CSEUtils.Propsition.Module.Tests.Logic;

public class PropositionConstructorTest
{
    [Test]
    public void TestSimpleCreationFromMinTerms() 
    {
        var proposition = PropositionConstructor.CreateFromMinTerms("3", "a,b");
        Assert.That(proposition?.ToString(), Is.EqualTo("a ∧ b"));
    }

    [Test]
    public void TestTakingAllVariablesIntoAccount() 
    {
        var proposition = PropositionConstructor.CreateFromMinTerms("0", "a,b");
        Assert.That(proposition?.ToString(), Is.EqualTo("(¬a) ∧ (¬b)"));
    }

    [Test]
    public void TestMultipleTermCreation() 
    {
        var proposition = PropositionConstructor.CreateFromMinTerms("0, 3", "a,b");
        Assert.That(proposition?.ToString(), Is.EqualTo("((¬a) ∧ (¬b)) ∨ (a ∧ b)"));
    }

    [Test]
    public void TestIgnoranceToSpaces()
    {
        var proposition = PropositionConstructor.CreateFromMinTerms("0 , 3", "a , b");
        Assert.That(proposition?.ToString(), Is.EqualTo("((¬a) ∧ (¬b)) ∨ (a ∧ b)"));
    }
    
    [Test]
    public void TestMultipleSimularTermCreation() 
    {
        var proposition = PropositionConstructor.CreateFromMinTerms("0, 2", "a,b");
        Assert.That(proposition?.ToString(), Is.EqualTo("((¬a) ∧ (¬b)) ∨ (a ∧ (¬b))"));
    }

    [Test]
    public void TestSimpleCreationFromMaxTerms() 
    {
        var proposition = PropositionConstructor.CreateFromMaxTerms("0,1,2", "a,b");
        Assert.That(proposition?.ToString(), Is.EqualTo("a ∧ b"));
    }

    [Test]
    public void TestTakingAllVariablesIntoAccountMaxTerm() 
    {
        var proposition = PropositionConstructor.CreateFromMaxTerms("1,2,3", "a,b");
        Assert.That(proposition?.ToString(), Is.EqualTo("(¬a) ∧ (¬b)"));
    }

    [Test]
    public void TestMultipleTermCreationMaxTerm() 
    {
        var proposition = PropositionConstructor.CreateFromMaxTerms("1, 2", "a,b");
        Assert.That(proposition?.ToString(), Is.EqualTo("((¬a) ∧ (¬b)) ∨ (a ∧ b)"));
    }

    [Test]
    public void TestIgnoranceToSpacesMaxTerm()
    {
        var proposition = PropositionConstructor.CreateFromMaxTerms("1 , 2", "a , b");
        Assert.That(proposition?.ToString(), Is.EqualTo("((¬a) ∧ (¬b)) ∨ (a ∧ b)"));
    }
    
    [Test]
    public void TestMultipleSimularTermCreationMaxTerm() 
    {
        var proposition = PropositionConstructor.CreateFromMaxTerms("1, 3", "a,b");
        Assert.That(proposition?.ToString(), Is.EqualTo("((¬a) ∧ (¬b)) ∨ (a ∧ (¬b))"));
    }
}
