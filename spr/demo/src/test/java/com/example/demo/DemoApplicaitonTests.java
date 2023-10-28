package com.example.demo;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
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


/*class ApplicationIntegrationTest {

    private int port = 8099;
    private WebDriver driver;

    @BeforeEach
    void setUp() {
        driver = new HtmlUnitDriver();
    }

    @AfterEach
    void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    void testLoginPage() {
        driver.get("http://localhost:" + port + "/");
        // Perform actions with WebDriver to interact with the page and validate the results.
    }
}*/

/*import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class DemoApplicationTests {

    @LocalServerPort
    private int port;

    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Test
    public void contextLoads() {
        // Test if the Spring application context loads successfully
    }

    @Test
    public void testEndpoint() {
        // You can use the TestRestTemplate to test your application's endpoints
        String url = "http://localhost:" + port + "/your-endpoint-url";
        String response = restTemplate.getForObject(url, String.class);

        // Assert and validate the response as needed
        // For example, you could use JUnit assertions:
        // Assertions.assertEquals("Expected Response", response);
    }
}*/
