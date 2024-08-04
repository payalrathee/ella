package com.estore.ella.services;

import com.estore.ella.dto.UserDto;
import com.estore.ella.entities.User;
import com.estore.ella.exceptions.UserException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService extends UserDetailsService {

    public User registerUser(User user) throws UserException;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

    public String provideToken(User user);

    public UserDto formatUser(User user);
}
