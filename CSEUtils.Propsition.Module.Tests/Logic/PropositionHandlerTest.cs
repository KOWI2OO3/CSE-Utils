using CSEUtils.Proposition.Module.Domain.Propositions;
using CSEUtils.Proposition.Module.Logic;

namespace CSEUtils.Propsition.Module.Tests.Logic.Extensions;

public class PropositionHandlerTest
{
    [SetUp]
    public void Setup() => PropositionHandler.Init();

    [Test]
    public void TestPropositionRegistration()
    {
        Assert.Multiple(() =>
        {
            Assert.That(PropositionHandler.GetProposition('∧'), Is.TypeOf<And>());
            Assert.That(PropositionHandler.GetProposition('∨'), Is.TypeOf<Or>());
        });

    }

}
