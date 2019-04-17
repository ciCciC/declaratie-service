package com.declaratie.declaratieapi.exceptionHandler;

import org.springframework.http.HttpStatus;

public class ApiError {

    private String message;
    private HttpStatus httpStatus;

    ApiError() {
        this.message = "";
    }

    ApiError(String message) {
        this.message = message;
    }

    ApiError(String message, HttpStatus httpStatus) {
        this.message = message;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public void addMessage(String msg) {
        this.message += msg + "\n";
    }

    public String getMessage() {
        return this.message;
    }
}
