// package com.warren.real_estate_ai.controller;

// import com.warren.dto.RegisterRequest;
// import com.warren.dto.LoginRequest;
// import com.warren.real_estate_ai.model.User;
// import com.warren.real_estate_ai.service.AuthService;
// import com.warren.real_estate_ai.service.UserService;
// import com.warren.dto.ResetPasswordRequest;
// import com.warren.dto.UserResponse;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/users")
// @CrossOrigin(origins = "http://localhost:3000")
// public class UserController {

//     private final UserService userService;
//     private final AuthService authService;

//     public UserController(UserService userService, AuthService authService) {
//         this.userService = userService;
//         this.authService = authService;
//     }

//     @PostMapping("/login")
//     public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
//         UserResponse user = authService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
//         if (user != null) {
//             return ResponseEntity.ok(user);
//         } else {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//         }
//     }

//     @PostMapping("/register")
//     public ResponseEntity<?> register(@RequestBody UserDto userDto) {
//         try {
//             User user = userService.registerUser(
//                 userDto.getFirstName(),
//                 userDto.getLastName(),
//                 userDto.getEmail(),
//                 userDto.getPassword()
//             );
//             return ResponseEntity.status(HttpStatus.CREATED).body(user);
//         } catch (UserAlreadyExistsException e) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("Email is already in use"));
//         } catch (Exception e) {
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse("Server error: Could not execute statement."));
//         }
//     }

//     @PostMapping("/forgot-password")
//     public ResponseEntity<?> forgotPassword(@RequestBody String email) {
//         boolean isEmailSent = authService.sendPasswordResetEmail(email.replace("\"", ""));
//         return isEmailSent ?
//             ResponseEntity.ok("Password reset email sent.") :
//             ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email not found");
//     }

//     @PostMapping("/reset-password")
//     public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
//         boolean success = authService.resetPassword(request.getToken(), request.getNewPassword());
//         return success ?
//             ResponseEntity.ok("Password reset successful") :
//             ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid or expired token");
//     }

//     @GetMapping("/getAll")
//     public ResponseEntity<List<User>> getAllUsers() {
//         return ResponseEntity.ok(userService.getAllUsers());
//     }
// }
