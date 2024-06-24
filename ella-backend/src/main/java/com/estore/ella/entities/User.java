package com.estore.ella.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name="user")
@Getter @Setter @NoArgsConstructor
public class User implements UserDetails{

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @NotBlank(message = "Username can't be empty")
    @Column(name="username", nullable=false, unique=true)
    private String username;

    @NotBlank(message = "Password can't be empty")
    @Size(min = 8, message = "Password must be atleast 8 characters long.")
    @Column(name="password", nullable=false)
    private String password;

    @Column(name="fname")
    private String fname;

    @Column(name="lname")
    private String lname;

    @Email
    @NotBlank(message = "Email can't be empty")
    @Column(name="email", nullable=false, unique=true)
    private String email;

    @Pattern(regexp="(^$|[0-9]{10})", message = "Invalid phone number")
    @Column(name="phone", unique=true, length=12)
    private String phone;

    @Column(name="profile_image", columnDefinition="varchar(1000) default 'https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg'")
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


