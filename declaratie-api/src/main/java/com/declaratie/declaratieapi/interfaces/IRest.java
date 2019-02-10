package com.declaratie.declaratieapi.interfaces;

import java.util.ArrayList;
import java.util.List;

public interface IRest<T> {

    boolean create(T t);
    T read(long id);
    boolean update(T t);
    boolean delete(int id);
    List<T> getAll();
}
