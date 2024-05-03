package kowi.cse_utils.Logic.Domain;

import java.util.Map;

public record PropositionalVaraible(char variableKey) implements IProposition {

    @Override
    public boolean solve(Map<Character, Boolean> data) {
        return data.containsKey(variableKey) ? data.get(variableKey) : false; 
    }

    @Override
    public String toString() {
        return variableKey + "";
    }

    @Override
    public boolean isComplete() {
        return true;
    }

}
