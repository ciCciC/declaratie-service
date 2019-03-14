package com.declaratie.declaratieapi.interfaces;

import java.util.List;

public interface IService<T> {

    T create(T t) throws Exception;
    T read(long id);
    T update(T t);
    boolean delete(long id);
    boolean delete(T t);

    List<T> getAll() throws Exception;
}
