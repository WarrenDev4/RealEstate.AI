// package com.warren.real_estate_ai.service;

// import java.time.LocalDateTime;
// import java.util.Optional;
// import java.util.UUID;

// import org.mindrot.jbcrypt.BCrypt;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.mail.MailException;
// import org.springframework.mail.SimpleMailMessage;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.stereotype.Service;

// import com.warren.dto.RegisterRequest;
// import com.warren.dto.UserResponse;
// import com.warren.real_estate_ai.model.PasswordResetToken;
// import com.warren.real_estate_ai.model.User;
// import com.warren.real_estate_ai.repository.PasswordResetTokenRepository;
// import com.warren.real_estate_ai.repository.UserRepository;

// @Service
// public class AuthService {

//     @Autowired 
//     private UserRepository userRepository;

//     @Autowired 
//     private PasswordResetTokenRepository passwordResetTokenRepository;

//     @Autowired 
//     private JavaMailSender mailSender;

//     private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

//     // Authenticate user with email and password
//     public UserResponse authenticate(String email, String password) {
//         Optional<User> optionalUser = userRepository.findByEmail(email);
//         if (optionalUser.isPresent()) {
//             User user = optionalUser.get();
//             if (BCrypt.checkpw(password, user.getPassword())) {
//                 return new UserResponse(user);
//             }
//         }
//         return null;
//     }

//     // Register new user
//     public boolean register(RegisterRequest request) {
//         if (userRepository.findByEmail(request.getEmail()).isPresent()) {
//             return false;
//         }

//         User user = new User();
//         user.setEmail(request.getEmail());
//         user.setFirstName(request.getFirstName());
//         user.setLastName(request.getLastName());
//         user.setPassword(BCrypt.hashpw(request.getPassword(), BCrypt.gensalt()));
//         userRepository.save(user);
//         return true;
//     }
    
//     public boolean sendPasswordResetEmail(String email) {
//         Optional<User> optionalUser = userRepository.findByEmail(email);
//         if (optionalUser.isPresent()) {
//             User user = optionalUser.get();

//             String token = generatePasswordResetToken(user);

//             SimpleMailMessage message = new SimpleMailMessage();
//             message.setTo(user.getEmail());
//             message.setSubject("Password Reset Request");
//             message.setText("""
//                     To reset your password, click the link below:
//                     http://localhost:8080/reset-password?token=%s
//                     """.formatted(token));

//             try {
//                 mailSender.send(message);
//                 return true;
//             } catch (MailException e) {
//                 logger.error("Failed to send password reset email", e);
//                 return false;
//             }
//         }
//         return false;
//     }

//     public boolean resetPassword(String token, String newPassword) {
//         Optional<PasswordResetToken> resetTokenOpt = passwordResetTokenRepository.findByToken(token);
//         if (resetTokenOpt.isPresent()) {
//             PasswordResetToken resetToken = resetTokenOpt.get();
    
//             if (resetToken.getExpiryDate().isBefore(LocalDateTime.now())) {
//                 return false; 
//             }
    
//             User user = resetToken.getUser();
//             user.setPassword(BCrypt.hashpw(newPassword, BCrypt.gensalt()));
//             userRepository.save(user);
//             passwordResetTokenRepository.delete(resetToken);
    
//             return true;
//         }
    
//         return false; 
//     }
    

//     private String generatePasswordResetToken(User user) {
//         String token = UUID.randomUUID().toString();
    
//         PasswordResetToken resetToken = new PasswordResetToken(); 
//         resetToken.setToken(token);
//         resetToken.setUser(user);
//         resetToken.setExpiryDate(LocalDateTime.now().plusHours(1));
    
//         passwordResetTokenRepository.save(resetToken);
//         return token;
//     }
    
// }
