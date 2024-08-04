package com.estore.ella.dto;

import com.estore.ella.entities.User;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AuthResponse {

    private String token;
    private String msg;
    private UserDto user;
}
