// package com.warren.config;

// import java.util.Properties;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.mail.javamail.JavaMailSenderImpl;

// @Configuration
// public class EmailConfig {

//     @Bean
//     public JavaMailSender javaMailSender() {
//         JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        
//         mailSender.setHost("sandbox.smtp.mailtrap.io"); 
//         mailSender.setPort(2525);
//         mailSender.setUsername("7c13561f887597"); 
//         mailSender.setPassword("176626d4b65bb5"); 
        
//         Properties props = mailSender.getJavaMailProperties();
//         props.put("mail.smtp.auth", "true");
//         props.put("mail.smtp.starttls.enable", "true");
        
//         return mailSender;
//     }
// }
