package com.estore.ella.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity
@Table(name = "address")
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

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user")
    private User user;
}
