package u;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import c.TestMe;

public class TestMeTests {

    TestMe testMe;

    @Before
    public void setUp() throws Exception {
        testMe  = new TestMe();
    }

    @Test
    public void squareTest() {

        double sideValue = 3.0;
        double expected = sideValue * sideValue;
        testMe.setValue(3.0);
        double actual = testMe.square(); 
        assertTrue (actual == expected);
    }

    @Test
    public void triangleTest() {
        double base = 2.0;
        double height = 2.0;
        double expected = base * height / 2;
        testMe.setTriangleConstraints(base, height);
        double actual = testMe.triangle(); 
        assertTrue (actual == expected);
    }

    @Test
    public void rectangleTest(){
        double length = 5.0;
        double width = 4.0;
        double expected = length * width;
        testMe.setRectangle(length,width);
        double actual = testMe.rectangle();
        assertTrue (actual == expected);
    }

    @Test
    public void circleTest(){
        double radius = 6.0;
        double expected = Math.PI * (2 * radius);
        testMe.setCircleRadius(6.0);
        double actual = testMe.circle();
        assertTrue (actual == expected);
    }
}


