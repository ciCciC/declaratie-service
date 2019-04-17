package com.declaratie.declaratieapi.exceptionHandler;

public class DeclarationNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 2L;

    public DeclarationNotFoundException(final String errorMessage) {
        super(errorMessage);
    }

    public DeclarationNotFoundException(final String errorMessage, final Throwable cause) {
        super(errorMessage, cause);
    }
}
