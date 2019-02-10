package com.declaratie.declaratieapi.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface IController<T, R> {

    ResponseEntity<R> create(T t);
    T read(long id);
    ResponseEntity<R> update(long id, T t);
    ResponseEntity<R> delete(long id);
}
