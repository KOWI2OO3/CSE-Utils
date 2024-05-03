package kowi.cse_utils.Utils;

import java.io.File;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.function.Predicate;

public class ReflectionUtils {

    @SuppressWarnings("unchecked")
    public static <T> Class<T>[] getClasses(Package dir, Predicate<Class<?>> predicate) {
        var classLoader = Thread.currentThread().getContextClassLoader();

        if(classLoader == null)
            return null;

        List<Class<T>> classes = new ArrayList<>();

        try{ 
            Enumeration<URL> resources = classLoader.getResources(dir.getName().replace(".", "/"));

            resources.asIterator().forEachRemaining(url -> {
                File directory = new File(url.getFile());
                for(File f : directory.listFiles()) {
                    if(f.isFile() && f.getName().endsWith(".class")) {
                        String className = dir.getName() + '.' + f.getName().substring(0, f.getName().length() - 6);
                        try {
                            Class<?> clazz = Class.forName(className);
                            Class<T> type = (Class<T>)clazz;
                            classes.add(type);
                        }catch(ClassCastException | ClassNotFoundException ex) {}
                    }
                }
            });
            
        }catch(Exception ex) {}

        return classes.toArray(i -> new Class[i]);
    } 

}
