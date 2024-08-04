package com.estore.ella.services;

import com.estore.ella.dto.ProductDto;
import com.estore.ella.dto.UserDto;
import com.estore.ella.entities.User;
import com.estore.ella.dao.UserRepository;
import com.estore.ella.utilities.JwtUtils;
import com.estore.ella.exceptions.UserException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;
    

    public User registerUser(User user) throws UserException {

        if(userRepository.getUserByEmail(user.getEmail()) != null) {
            throw new UserException("Email already registered");
        }

        if(userRepository.getUserByUsername(user.getUsername()) != null) {
            throw new UserException("Username already taken.");
        }

//        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setUserRole("CUSTOMER");
        user.setAccountNonExpired(true);
        user.setAccountNonExpired(true);
        user.setAccountNonLocked(true);
        user.setEnabled(true);
        user.setCreatedAt(LocalDateTime.now());

        return userRepository.save(user);

    }

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

    public String provideToken(User user) {

        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(auth);
        return jwtUtils.generateToken(auth);

    }

    @Override
    public UserDto formatUser(User user) {

        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(user, userDto);
        userDto.setPassword("");

        return userDto;
    }


}
