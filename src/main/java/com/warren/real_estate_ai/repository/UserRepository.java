package com.warren.real_estate_ai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.warren.real_estate_ai.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
