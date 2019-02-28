package com.declaratie.declaratieapi.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface IController<T, R> {

    R create(T t);
    R read(long id);
    R update(long id, T t);
    R delete(long id);
}
