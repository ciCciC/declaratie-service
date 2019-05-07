package com.declaratie.declaratieapi.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.transaction.TransactionSystemException;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

public class RestExceptionHandler {

    public static ApiError handleException(final RuntimeException ex) {
        Throwable cause = ((TransactionSystemException) ex).getRootCause();
        ApiError apiError = new ApiError();

        if (cause instanceof ConstraintViolationException) {
            apiError = handleConstraintViolationException(cause);
        }
        return apiError;
    }

    private static ApiError handleConstraintViolationException(Throwable cause) {
        ApiError apiError = new ApiError();
        for (ConstraintViolation constraintViolation : ((ConstraintViolationException) cause).getConstraintViolations()) {
            apiError.addMessage(constraintViolation.getMessageTemplate());
        }
        apiError.setHttpStatus(HttpStatus.BAD_REQUEST);
        return apiError;
    }
}
