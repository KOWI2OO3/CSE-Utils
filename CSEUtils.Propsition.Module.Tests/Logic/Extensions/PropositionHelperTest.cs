using CSEUtils.Proposition.Module.Logic.Extensions;
using CSEUtils.Propsition.Module.Tests.Logic.Extensions.Domain;

namespace CSEUtils.Propsition.Module.Test.Logic.Extensions;

public class PropositionHelperTest
{
    [SetUp]
    public void Setup()
    {
    }

    //GetAllPossibilities
    [Test]
    public void SimpleOneVariableTest()
    {
        var prop = new FakeProposition(["a"]);
        var options = prop.GetAllPossibilities();
        Assert.That(options, Has.Count.EqualTo(2));
        Assert.That(options, Has.Member(new Dictionary<string, bool> { { "a", true } }));
        Assert.That(options, Has.Member(new Dictionary<string, bool> { { "a", false } }));
    }

    [Test]
    public void SimpleMultiVariableTest()
    {
        var prop = new FakeProposition(["a", "b"]);
        var options = prop.GetAllPossibilities();
        Assert.That(options, Has.Count.EqualTo(4));
        Assert.That(options, Has.Member(new Dictionary<string, bool> { { "a", true }, { "b", false } }));
        Assert.That(options, Has.Member(new Dictionary<string, bool> { { "a", false }, { "b", false }  }));
        Assert.That(options, Has.Member(new Dictionary<string, bool> { { "a", true }, { "b", true } }));
        Assert.That(options, Has.Member(new Dictionary<string, bool> { { "a", false }, { "b", true }  }));
    }
}
