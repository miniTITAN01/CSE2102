package com.example.demo;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assertions.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;


@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class DemoApplicationTests {


	@Test
	void contextLoads() {
	}

	@Test
	void simpleAdd_1() {
		int expected = 5;
		int actual = 3+2;
		Assertions.assertEquals(expected, actual);
	}

	@Test
	void simpleAdd_2() {
		int expected = 5;
		int actual = 3+2+1;
		Assertions.assertNotEquals(expected, actual);
	}
    void testSubtraction() {
        int expected = 2;
        int actual = 5 - 3;
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void testMultiplication() {
        int expected = 10;
        int actual = 2 * 5;
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void testDivision() {
        int expected = 3;
        int actual = 9 / 3;
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void testStringConcatenation() {
        String expected = "Hello, World!";
        String actual = "Hello, " + "World!";
        Assertions.assertEquals(expected, actual);
    }
   
}

