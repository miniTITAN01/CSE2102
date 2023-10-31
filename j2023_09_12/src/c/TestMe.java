package c;

public class TestMe {
    private double sides = Double.NaN;

    private double base = Double.NaN;
    private double height = Double.NaN;

    private double length = Double.NaN;
    private double width = Double.NaN;

    private double radius = Double.NaN;

    public static void main(String[] args) {
        System.out.println("Hello world!");
    }

    public TestMe() {}

    public double square() { return sides*sides; } 

    public double triangle() {return base * height / 2;}

    public double rectangle() {return length * width;}

    public double circle() {return Math.PI * (2 * radius);}

    public void setValue(double v) {
        sides = v;

    }

    public void setTriangleConstraints(double b, double h) {
        base = b;
        height = h; 
    }

    public void setRectangle (double l, double w){
        length = l ;
        width = w;
    }

    public void setCircleRadius (double r){
        radius = r ;

    }

}

