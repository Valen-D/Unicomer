package com.unicomer.backendtechforb.services.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;



@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class InsufficientBalanceException extends RuntimeException {

    public InsufficientBalanceException(String message) {
        super(message);
    }
}
