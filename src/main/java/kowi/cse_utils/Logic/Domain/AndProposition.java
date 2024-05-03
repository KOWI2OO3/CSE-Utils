package kowi.cse_utils.Logic.Domain;

import java.util.Map;
import java.util.Set;

import kowi.cse_utils.Logic.Utils.PropositionUtils;

@Proposition({'*', '&'})
public class AndProposition implements IProposition, IPramatarized {
 
    IProposition p;
    IProposition q;

    @Override
    public boolean solve(Map<Character, Boolean> data) {
        return p.solve(data) && q.solve(data);
    }

    @Override
    public void addParameter(IProposition c) {
        if(p == null)
            p = c;
        else if(q == null)
            q = c;
    }

    @Override
    public boolean isComplete() {
        return p != null && q != null;
    }
    
    @Override
    public String toString() {
        return p != null && q != null ? p.getDisplayString() + " & " + q.getDisplayString() : "{Critical Failure}";
    }

    @Override
    public Set<Character> getVariables() {
        var variables = PropositionUtils.getVariablesFromProposition(p);
        variables.addAll(PropositionUtils.getVariablesFromProposition(q));
        return variables;
    }
}
