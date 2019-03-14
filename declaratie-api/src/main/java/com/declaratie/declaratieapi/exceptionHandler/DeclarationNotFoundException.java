package com.declaratie.declaratieapi.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Declaration not found")
public class DeclarationNotFoundException extends Exception {
    private static final long serialVersionUID = 1L;
    public DeclarationNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
