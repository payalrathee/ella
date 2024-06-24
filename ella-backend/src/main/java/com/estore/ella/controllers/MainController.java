package com.estore.ella.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class MainController {

    @GetMapping("/home")
    public String home() {
        return "home page";
    }

//    @GetMapping("/login")
//    public String login() {
//        return "login page";
//    }
}
