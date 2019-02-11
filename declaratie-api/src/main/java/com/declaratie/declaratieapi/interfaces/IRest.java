package com.declaratie.declaratieapi.interfaces;

import java.util.List;

public interface IRest<T> {

    boolean create(T t);
    T read(long id);
    T update(T t);
    boolean delete(long id);
    boolean delete(T t);
    List<T> getAll();
}
