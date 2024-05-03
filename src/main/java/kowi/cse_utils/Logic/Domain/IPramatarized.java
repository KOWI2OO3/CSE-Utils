package kowi.cse_utils.Logic.Domain;

import java.util.Set;

public interface IPramatarized {
    
    public void addParameter(IProposition c);
    public Set<Character> getVariables();

}
