package com.estore.ella.controllers;

import com.estore.ella.entities.User;
import com.estore.ella.exceptions.AuthException;
import com.estore.ella.services.UserService;
import com.estore.ella.utilities.JwtUtils;
import com.estore.ella.exceptions.UserException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.estore.ella.dto.AuthRequest;
import com.estore.ella.dto.AuthResponse;

@RestController
@RequestMapping("")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/home")
    public String home() {
        return "home page";
    }

    @PostMapping(path = "/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody AuthRequest authRequest) throws UsernameNotFoundException, AuthException {

        String username = authRequest.getUsername();
        String password = authRequest.getPassword();

        User user = (User) userService.loadUserByUsername(username);

        if(!passwordEncoder.matches(password, user.getPassword())) {
            throw new AuthException("Invalid password");
        }

        String token = userService.provideToken(user);
        AuthResponse response = new AuthResponse();
        response.setToken(token);
        response.setMsg("Login successful");
        response.setUser(userService.formatUser(user));

        return new ResponseEntity<>(response, HttpStatus.OK);

    }
}
