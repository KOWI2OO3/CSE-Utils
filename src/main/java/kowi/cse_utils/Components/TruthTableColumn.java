package kowi.cse_utils.Components;

import java.util.function.Supplier;

import javax.swing.table.DefaultTableColumnModel;
import javax.swing.table.TableColumn;

public class TruthTableColumn extends DefaultTableColumnModel {

    Supplier<TruthTable> model;

    public TruthTableColumn(Supplier<TruthTable> model) {
        this.model = model;
    }
    
    @Override
    public int getColumnCount() {
        if(super.getColumnCount() < model.get().getColumnCount()) {
            for (int i = super.getColumnCount(); i < model.get().getColumnCount(); i++)
                addColumn(new TableColumn(i));
        }else if(super.getColumnCount() > model.get().getColumnCount()) {
            int end = super.getColumnCount();
            for (int i = model.get().getColumnCount(); i < end; i++)
                removeColumn(getColumn(super.getColumnCount() - 1));
        }
        return super.getColumnCount();
    }

}
