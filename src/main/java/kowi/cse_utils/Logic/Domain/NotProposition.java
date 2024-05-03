package kowi.cse_utils.Logic.Domain;

import java.util.Map;
import java.util.Set;

import kowi.cse_utils.Logic.Utils.PropositionUtils;

@Proposition({'-', '!'})
public class NotProposition implements IProposition, IPramatarized {
    
    IProposition p;

    @Override
    public boolean solve(Map<Character, Boolean> data) {
        return !p.solve(data);
    }

    @Override
    public String toString() {
        return p instanceof IPramatarized ? "¬" + "(" + p.toString() + ")" :  "¬" + p.toString();
    }

    @Override
    public String getDisplayString() {
        return toString();
    }
    
    @Override
    public void addParameter(IProposition c) {
        if(p == null)
            p = c;
    }
    
    @Override
    public boolean isComplete() {
        return p != null;
    }

    @Override
    public Set<Character> getVariables() {
        return PropositionUtils.getVariablesFromProposition(p);
    }

}
