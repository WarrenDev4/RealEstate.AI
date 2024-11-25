package com.warren.real_estate_ai;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Controller
    public class HomeController {

        // Serve the React app's index.html
        @GetMapping("/")
        public String home() {
            return "index.html"; // No need for forward: if it's in static folder
        }
    }
}
