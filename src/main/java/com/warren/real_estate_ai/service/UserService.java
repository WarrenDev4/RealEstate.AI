package com.warren.real_estate_ai.service;

import java.util.List;

import com.warren.real_estate_ai.model.User;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
