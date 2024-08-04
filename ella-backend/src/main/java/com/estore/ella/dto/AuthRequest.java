package com.estore.ella.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class AuthRequest {

    @NotNull(message = "Username/Email can't be empty")
    @NotBlank(message = "Username/Email can't be empty")
    private String username;

    @NotNull(message = "Password is mandatory")
    @NotBlank(message = "Password is mandatory")
    private String password;
}
