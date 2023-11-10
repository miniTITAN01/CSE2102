package com.example.demo;

import com.example.demo.service.EmailValidationService;
import com.example.demo.service.PasswordQualityService;


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class EmailValidationServiceTest {

    private final EmailValidationService service = new EmailValidationService();

    @Test
    void testValidEmail() {
        assertTrue(service.isValidEmail("example@example.com"));
    }

    @Test
    void testInvalidEmail() {
        assertFalse(service.isValidEmail("invalid-email"));
    }
}

class PasswordQualityServiceTest {

    private final PasswordQualityService service = new PasswordQualityService();

    @Test
    void testStrongPassword() {
        assertTrue(service.isStrongPassword("StrongPass123"));
    }

    @Test
    void testWeakPassword() {
        assertFalse(service.isStrongPassword("weak"));
    }
}


