package kowi.cse_utils.Logic.Domain;

import java.util.Map;

public class PrimitiveProposition implements IProposition {
    
    boolean value;

    public PrimitiveProposition(boolean value) {
        this.value = value;
    }

    @Override
    public boolean solve(Map<Character, Boolean> data) {
        return value;
    }

    @Override
    public boolean isComplete() {
        return true;
    }
    
    @Override
    public String toString() {
        return value ? "T" : "F";
    }
}
