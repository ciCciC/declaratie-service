package com.declaratie.declaratieapi.interfaces;

public interface IRest<T> {

    boolean create(T t);
    T read(int id);
    boolean update(T t);
    boolean delete(int id);
}
