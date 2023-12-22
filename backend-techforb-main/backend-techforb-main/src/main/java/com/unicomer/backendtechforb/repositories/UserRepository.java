package com.unicomer.backendtechforb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.unicomer.backendtechforb.models.User;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    List<User> findAll();
}
