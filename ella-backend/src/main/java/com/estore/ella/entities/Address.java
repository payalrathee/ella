package com.estore.ella.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "address")
@Getter @Setter @NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @NotBlank(message = "First name can't be empty.")
    @Column(name = "first_name", nullable = false)
    private String fname;

    @NotBlank(message = "Last name can't be empty")
    @Column(name = "last_name", nullable = false)
    private String lname;

    @NotBlank(message = "Street address can't be empty")
    @Column(name = "street_address", nullable = false)
    private String streetAddress;

    @NotBlank(message = "City can't be empty")
    @Column(name = "city", nullable = false)
    private String city;

    @NotBlank(message = "State can't be empty")
    @Column(name = "state", nullable = false)
    private String state;

    @NotBlank(message = "Country can't be empty")
    @Column(name = "country", nullable = false)
    private String country;

    @NotBlank(message = "Zip can't be empty")
    @Pattern(regexp = "^[A-Za-z\\d\\s\\-]{3,10}$", message = "Invalid zip")
    @Column(name = "zip", nullable = false)
    private int zip;

    @Column(name = "user")
    private User user;
}
