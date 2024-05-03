package kowi.cse_utils;

import de.mirkosertic.bytecoder.api.Export;
import kowi.cse_utils.Logic.Domain.IProposition;
import kowi.cse_utils.Logic.Handler.PropositionHandler;
import kowi.cse_utils.Logic.Handler.PropositionParser;

public class Main {

    public static void main(String[] args) {        
        PropositionHandler.init();
    }

    public static IProposition parse(String proposition) {
        return new PropositionParser().parse(proposition);
    }

    @Export("getTable")
    public static String getTable(String proposition) {
        return parse(proposition).toString();
    }
}