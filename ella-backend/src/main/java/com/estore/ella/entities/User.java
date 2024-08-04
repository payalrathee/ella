package com.estore.ella.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Data
@Entity
@Table(name="user")
public class User implements UserDetails{

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @NotNull
    @NotBlank(message = "Username can't be empty")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Username must be alphanumeric")
    @Column(name="username", nullable=false, unique=true)
    private String username;

    @NotNull
    @Email(message = "Invalid email")
    @NotBlank(message = "Email can't be empty")
    @Column(name="email", nullable=false, unique=true)
    private String email;

    @NotNull
    @NotBlank(message = "Password can't be empty")
    private String password;

    @Pattern(regexp = "^[a-zA-Z]+$", message = "First name must contain only alphabetic characters")
    @Column(name="fname")
    private String fname;

    @Pattern(regexp = "^[a-zA-Z]+$", message = "Last name must contain only alphabetic characters")
    @Column(name="lname")
    private String lname;

    @Pattern(regexp="(^$|[0-9]{10})", message = "Invalid phone number")
    @Column(name="phone", length=12)
    private String phone;

    @Column(name="profile_image")
    private String profileImg;

    @Column(name="user_role", nullable=false)
    private String userRole;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Address> addresses;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<PaymentCard> paymentCards;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Review> reviews;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Rating> ratings;

//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Order> orders;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private boolean enabled;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }
}


