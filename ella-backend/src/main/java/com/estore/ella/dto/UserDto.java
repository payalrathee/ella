package com.estore.ella.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class UserDto {

    @NotNull
    @NotBlank(message = "Username can't be empty")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Username must be alphanumeric")
    private String username;

    @NotNull
    @Email(message = "Invalid email")
    @NotBlank(message = "Email can't be empty")
    private String email;

    @NotNull
    @NotBlank(message = "Password is mandatory")
    @Size(min = 8, max = 20, message = "Password must be between 8 and 20 characters")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
            message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character")
    private String password;

    @Pattern(regexp="(^$|[0-9]{10})", message = "Invalid phone number")
    private String phone;

    @Pattern(regexp = "^[a-zA-Z]+$", message = "First name must contain only alphabetic characters")
    private String fname;

    @Pattern(regexp = "^[a-zA-Z]+$", message = "Last name must contain only alphabetic characters")
    private String lname;

}
