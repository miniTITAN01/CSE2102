package com.example.demo.service;

public class PasswordQualityService {

    // Implement a method to check password quality
    public boolean isStrongPassword(String password) {
        // Example check: password length and a mix of characters
        return password.length() > 8 &&
               password.matches(".*[A-Z].*") &&
               password.matches(".*[a-z].*") &&
               password.matches(".*[0-9].*");
    }
}
