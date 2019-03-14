package com.declaratie.declaratieapi.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public interface IController<T, R> {

    ResponseEntity<T> create(T t);
    ResponseEntity<T> read(R id);
    ResponseEntity<T> update(R id, T t);
    ResponseEntity<T> delete(R id);

    ResponseEntity<List<T>> getAll();
}
