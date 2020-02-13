package runner;


import org.hashids.Hashids;

public abstract class Utils {
    public static String generateEmail(Long value) {
        try {
            Hashids hashids = new Hashids("CFX Test Automation", 10, "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
            String hashReference = hashids.encode(value);
            return hashReference + "@automation.test";
        } catch (Exception e) {
            return null;
        }


}}
