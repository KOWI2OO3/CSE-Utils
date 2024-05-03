package kowi.cse_utils.Logic.Domain;

import java.util.Map;

public interface IProposition {
    
    public boolean solve(Map<Character, Boolean> data);

    public boolean isComplete();
    
    public default String getDisplayString() {
        return this instanceof IPramatarized ? "(" + toString() + ")" : toString();
    }

}
