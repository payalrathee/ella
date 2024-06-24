package com.estore.ella.services;

import com.estore.ella.entities.User;
import com.estore.ella.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.getUserByEmail(username);
        if(user == null) {
            user = userRepository.getUserByUsername(username);
        }

        if(user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return user;
    }
}
