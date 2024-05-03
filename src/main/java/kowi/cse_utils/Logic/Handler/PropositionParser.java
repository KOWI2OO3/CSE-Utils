package kowi.cse_utils.Logic.Handler;

import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

import kowi.cse_utils.Logic.Domain.IPramatarized;
import kowi.cse_utils.Logic.Domain.IProposition;
import kowi.cse_utils.Logic.Domain.NotProposition;
import kowi.cse_utils.Logic.Domain.PropositionalVaraible;

public class PropositionParser {

    private int pointer = 0;
    private Set<Character> variables = new HashSet<>();

    private static final Set<Character> alphabetic = new HashSet<>() {{
        for (char c = 'a'; c <= 'z'; c++)
            add(c);
    }};

    public IProposition parse(String input) {
        pointer = 0;
        variables.clear();
        return parse(input, ')');
    }

    private IProposition parse(String input, char escape) {
        IProposition chache = null;
        Stack<IProposition> stack = new Stack<>();

        while(pointer < input.length()) {
            char c = input.charAt(pointer);
            if(c == ' ') {
                pointer++;
                continue;
            }

            if(alphabetic.contains(Character.toLowerCase(c))) {
                if(chache == null) {
                    chache = new PropositionalVaraible(c);
                    variables.add((Character)c);
                }else {
                    if(chache instanceof PropositionalVaraible) {
                        throw new IllegalArgumentException("Expected operator at [" + pointer + "]");
                    }
                    if(chache instanceof NotProposition not && stack.size() > 0) {
                        not.addParameter(new PropositionalVaraible(c));
                        variables.add((Character)c);
                        chache = stack.pop();
                        if(chache instanceof IPramatarized pramatarized)
                            pramatarized.addParameter(not);
                    }else if(chache instanceof IPramatarized pramatarized) {
                        pramatarized.addParameter(new PropositionalVaraible(c));
                        variables.add((Character)c);
                    }
                }
            }else {
                if(c == '(') {
                    pointer++;
                    var localChache = parse(input, escape);
                    if(chache != null) {
                        if(chache instanceof IPramatarized pramatarized)
                            pramatarized.addParameter(localChache);
                        else
                            throw new IllegalArgumentException("Expected operator at [" + pointer + "]");
                    }else
                        chache = localChache;
                }else if(c == escape)
                    break;
                else {
                    if(PropositionHandler.getOperators(NotProposition.class).contains(c) && 
                        chache instanceof IPramatarized && 
                        chache.getClass() != NotProposition.class) {
                            stack.push(chache);
                            chache = PropositionHandler.getProposition(c);
                    }else
                        chache = PropositionHandler.getProposition(c, chache);
                }
            }

            pointer++;
            
        }
        return chache;
    }

    public Set<Character> getVariables() {
        return variables;
    }
    
}
