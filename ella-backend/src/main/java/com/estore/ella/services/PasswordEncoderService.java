package com.estore.ella.services;

import com.estore.ella.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordEncoderService {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User encodePassword(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return user;
    }
}
