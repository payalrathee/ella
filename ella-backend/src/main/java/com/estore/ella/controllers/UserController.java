package com.estore.ella.controllers;

import com.estore.ella.dto.UserDto;
import com.estore.ella.entities.User;
import com.estore.ella.services.PasswordEncoderService;
import com.estore.ella.services.UserService;
import com.estore.ella.exceptions.UserException;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.estore.ella.dto.AuthResponse;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoderService passwordEncoderService;

    @RequestMapping("/user/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody UserDto userDto) throws UserException {

        User user = new User();
        BeanUtils.copyProperties(userDto, user);

        user = passwordEncoderService.encodePassword(user);
        user = userService.registerUser(user);

        String token = userService.provideToken(user);
        AuthResponse response = new AuthResponse();
        response.setToken(token);
        response.setMsg("Registration successful");
        response.setUser(userService.formatUser(user));

        return new ResponseEntity<>(response, HttpStatus.CREATED);
        
    }
}
