package com.estore.ella.controllers;

import com.estore.ella.dto.AuthResponse;
import com.estore.ella.entities.User;
import com.estore.ella.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
@RequestMapping("api/v1")
public class MainController {

    @Autowired
    UserService userService;

    @GetMapping("/")
    public ResponseEntity<AuthResponse> home(Principal principal) {
        String username = principal.getName();
        User user = (User) userService.loadUserByUsername(username);
        AuthResponse response= new AuthResponse();
        response.setUser(userService.formatUser(user));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
