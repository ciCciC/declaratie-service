package com.declaratie.declaratieapi.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public interface IController<T, R> {

    R create(T t);
    R read(Long id);
    R update(Long id, T t);
    R delete(Long id);

    ResponseEntity<List<T>> getAll();
}
