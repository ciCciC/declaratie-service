package com.declaratie.declaratieapi.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Declaration is not processable")
public class UnprocessableDeclarationException extends Exception {
    private static final long serialVersionUID = 2L;
    public UnprocessableDeclarationException(String errorMessage) {super(errorMessage);}
}
