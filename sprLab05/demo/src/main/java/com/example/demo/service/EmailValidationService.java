package com.example.demo.service;

public class EmailValidationService {

    public boolean isValidEmail(String email) {
        // Simple regex for email validation
        return email.matches("^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$");
    }
}
