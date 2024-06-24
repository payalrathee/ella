package com.estore.ella.repositories;

import com.estore.ella.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    public User getUserByEmail(String email);
    public User getUserByUsername(String username);

}
