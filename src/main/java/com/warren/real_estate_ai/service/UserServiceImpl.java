// package com.warren.real_estate_ai.service;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.stereotype.Service;

// import com.warren.real_estate_ai.model.User;
// import com.warren.real_estate_ai.repository.UserRepository;

// @Service
// public class UserServiceImpl implements UserService {

//     private final UserRepository userRepository;

//     public UserServiceImpl(UserRepository userRepository) {
//         this.userRepository = userRepository;
//     }

//     @Override
//     public User registerUser(String firstName, String lastName, String email, String password) {
//         String encodedPassword = new BCryptPasswordEncoder().encode(userDto.getPassword());
//         User user = new User();
//         user.setFirstName(firstName);
//         user.setLastName(lastName);
//         user.setEmail(email);
//         user.setPassword(password);

//         return userRepository.save(user);
//     }

//     @Override
//     public Optional<User> authenticateUser(String email, String password) {
//         Optional<User> user = userRepository.findByEmail(email);
//         return user.filter(u -> u.getPassword().equals(password));
//     }

//     @Override
//     public User saveUser(User user) {
//         return userRepository.save(user);
//     }

//     @Override
//     public List<User> getAllUsers() {
//         return userRepository.findAll();
//     }
// }
