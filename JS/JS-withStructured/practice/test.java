import java.util.ArrayList;
import java.util.Arrays;

public class test {

    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>(Arrays.asList(1, 2, 3));
        // System.out.println(arr.indexOf(4));
        int[] arrr = { 1, 23, 4, 5 };
        Arrays.sort(arrr);
        for (int i : arrr) {
            System.out.println(i);
        }

    }
}