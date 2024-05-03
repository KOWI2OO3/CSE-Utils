package kowi.cse_utils.Logic.Utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import kowi.cse_utils.Logic.Domain.IPramatarized;
import kowi.cse_utils.Logic.Domain.IProposition;
import kowi.cse_utils.Logic.Domain.PropositionalVaraible;

public class PropositionUtils {
    
    public static Set<Character> getVariablesFromProposition(IProposition p) { 
        Set<Character> variables = new HashSet<>();
        if(p instanceof IPramatarized pramatarized)
            variables.addAll(pramatarized.getVariables());
        else if(p instanceof PropositionalVaraible var)
            variables.add(var.variableKey());
        return variables;
    }

    public static List<Map<Character, Boolean>> getAllPosibilities(IProposition proposition) {
        List<Map<Character, Boolean>> result = new ArrayList<>();
        
        var variables = new ArrayList<>(getVariablesFromProposition(proposition));
        int posibilities = (int)Math.pow(2, variables.size());

        for (int i = 0; i < posibilities; i++) {
            String binary = Integer.toBinaryString(i);
            binary = "0".repeat(variables.size() - binary.length()) + binary;

            HashMap<Character, Boolean> values = new HashMap<>();
            for (int j = 0; j < variables.size(); j++)
                values.put((Character)variables.get(j), binary.charAt(j) == '1');

            result.add(values);
        }
        return result;
    }

    public static String createTruthTable(IProposition p) {
        var variables = new ArrayList<>(getVariablesFromProposition(p));

        String result = " ";
        String table = "-";

        String propositionDisplay = p.toString();

        for (Character c : variables) {
            result += c + " ";
            table += "--";
        }
        result += "| " + propositionDisplay + " \n";
        table += "+-" + "-".repeat(propositionDisplay.length() + 1);
        result += table + "\n";


        int posibilities = (int)Math.pow(2, variables.size());

        for (int i = 0; i < posibilities; i++) {
            String binary = Integer.toBinaryString(i);
            binary = "0".repeat(variables.size() - binary.length()) + binary;

            HashMap<Character, Boolean> values = new HashMap<>();
            for (int j = 0; j < variables.size(); j++)
                values.put((Character)variables.get(j), binary.charAt(j) == '1');

            String line = " ";
            for (char c : binary.toCharArray()) {
                line += c + " ";
            }
            line += "| " + " ".repeat(propositionDisplay.length() / 2);
            line += p.solve(values) ? '1' : '0';
            line += "\n";

            result += line;
        }

        return result;
    }

}
