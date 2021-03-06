package com.tradindemboiz.spring.repositories;

import com.tradindemboiz.spring.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

  User findByUsername(String username);

  Boolean existsByUsername(String username);
}
