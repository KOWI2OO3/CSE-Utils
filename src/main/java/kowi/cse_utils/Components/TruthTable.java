package kowi.cse_utils.Components;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import javax.swing.event.TableModelEvent;
import javax.swing.event.TableModelListener;
import javax.swing.table.TableModel;

import kowi.cse_utils.Logic.Domain.IProposition;
import kowi.cse_utils.Logic.Utils.PropositionUtils;

public class TruthTable implements TableModel {
    
    IProposition proposition;
    Set<Character> variables;

    Set<TableModelListener> listeners;

    public TruthTable(IProposition proposition) {
        this.proposition = proposition;
        this.variables = PropositionUtils.getVariablesFromProposition(proposition);
        this.listeners = new HashSet<>();
    }

    public void setProposition(IProposition proposition) {
        this.proposition = proposition;
        this.variables = PropositionUtils.getVariablesFromProposition(proposition);
        for (TableModelListener listener : listeners)
            listener.tableChanged(new TableModelEvent(this));
    }

    @Override
    public int getRowCount() {
        return (int)Math.pow(2, variables.size()) + 1;
    }


    @Override
    public int getColumnCount() {
        return variables.size() + 1;
    }


    @Override
    public String getColumnName(int columnIndex) {
        return "";
    }


    @Override
    public Class<?> getColumnClass(int columnIndex) {
        return String.class;
    }


    @Override
    public boolean isCellEditable(int rowIndex, int columnIndex) {
        return false;
    }


    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        var posibles = PropositionUtils.getAllPosibilities(proposition);
        if(posibles == null || posibles.size() <= 0)
            return "";
        if(rowIndex == 0) {
            if(columnIndex < variables.size())
                return new ArrayList<>(variables).get(columnIndex);
            return proposition.toString();
        }
        
        if(rowIndex - 1 < posibles.size()) {
            var vars = posibles.get(rowIndex -1 );
            if(columnIndex < vars.size()) {
                return vars.get(new ArrayList<>(variables).get(columnIndex)) ? "1" : "0";
            }
            return proposition.solve(vars) ? "1" : "0";
        }
        return "";
    }


    @Override
    public void setValueAt(Object aValue, int rowIndex, int columnIndex) {}


    @Override
    public void addTableModelListener(TableModelListener l) {
        listeners.add(l);
    }


    @Override
    public void removeTableModelListener(TableModelListener l) {
        listeners.remove(l);
    }

}
