package kowi.cse_utils.Logic.Handler;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import kowi.cse_utils.Logic.Domain.IPramatarized;
import kowi.cse_utils.Logic.Domain.IProposition;
import kowi.cse_utils.Logic.Domain.Proposition;
import kowi.cse_utils.Utils.ReflectionUtils;

public class PropositionHandler {

    private static final Map<Character, Class<? extends IProposition>> PROPOSITION_TYPES = new HashMap<>();

    private static final Map<Character, Function<IProposition[], IProposition>> PROPOSITION_CREATORS = new HashMap<>();

    public static void init() {
        Class<? extends IProposition>[] classes = ReflectionUtils.getClasses(IProposition.class.getPackage(), null);

        for (Class<? extends IProposition> type : classes) {
            Proposition proposition = type.getAnnotation(Proposition.class);
            if(proposition != null) {
                for (char c : proposition.value())
                    PROPOSITION_TYPES.put((Character)c, type);
            }
        }
    }

    public static IProposition getProposition(char c, IProposition... propositions) {
        Character charc = (Character)c;
        try {
            var proposition = PROPOSITION_TYPES.containsKey(charc) ? 
                PROPOSITION_TYPES.get(charc).getDeclaredConstructor().newInstance() :
                null;
            if(proposition instanceof IPramatarized param) {
                for (IProposition arg : propositions) {
                    if(arg != null)
                        param.addParameter(arg);
                }
            }
            return proposition;
        }catch(Exception ex) {
            return null;
        }
    }

    public static boolean anyPropositionOf(char c) {
        return PROPOSITION_TYPES.containsKey(c);
    }

    public static Set<Character> getOperators(Class<? extends IProposition> type) {
        Proposition proposition = type.getAnnotation(Proposition.class);
        Set<Character> values = new HashSet<>();
        for (char c : proposition != null ? proposition.value() : new char[0]) 
            values.add(c);
        return values;
    }

    private static void register(Function<IProposition[], IProposition> creator, char... c) {

    }

}
