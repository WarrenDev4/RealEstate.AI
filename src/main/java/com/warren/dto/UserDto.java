// package com.warren.dto;

// public class UserDto {
//     private String firstName;
//     private String lastName;
//     private String email;
//     private String password;

//     public String getFirstName() {
//         return firstName;
//     }

//     public void setFirstName(String firstName) {
//         this.firstName = firstName;
//     }

//     public String getLastName() {
//         return lastName;
//     }

//     public void setLastName(String lastName) {
//         this.lastName = lastName;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }
    
//     @Override
//     public String toString() {
//         return "UserDto [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password=" + password + "]";
//     }
    
//     // Constructor
//     public UserDto(String firstName, String lastName, String email, String password) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.password = password;
//     }
    
//     public UserDto() {
//     }
    
//     // Other methods (if needed)
    
//     // Example method to validate the DTO
//     public boolean isValid() {
//         if (firstName == null || firstName.isEmpty()) return false;
//         if (lastName == null || lastName.isEmpty()) return false;
//         if (email == null || email.isEmpty() || !email.matches("^[A-Za-z0-9+_.-]+@(.+)$")) return false;
//         if (password == null || password.isEmpty() || password.length() < 6) return false;  // Password should be at least 6 characters
//         return true;
//     }
    
    
//     // Example method to convert to User entity (if needed)
//     public User toUser() {
//         User user = new User();
//         user.setFirstName(this.firstName);
//         user.setLastName(this.lastName);
//         user.setEmail(this.email);
//         user.setPassword(this.password);
//         return user;
//     }
    
//     // Example method to convert from User entity (if needed)
//     public static UserDto fromUser(User user) {
//         UserDto userDto = new UserDto();
//         userDto.setFirstName(user.getFirstName());
//         userDto.setLastName(user.getLastName());
//         userDto.setEmail(user.getEmail());
//         userDto.setPassword(user.getPassword());
//         return userDto;
//     }
    
// }
