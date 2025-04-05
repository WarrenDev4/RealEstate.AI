// package com.warren.real_estate_ai.service;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.mail.javamail.MimeMessageHelper;
// import org.springframework.stereotype.Service;

// import com.warren.real_estate_ai.util.EmailUtils;

// import jakarta.mail.MessagingException;
// import jakarta.mail.internet.MimeMessage;

// @Service
// public class EmailService {

//     private final JavaMailSender javaMailSender;
//     private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

//     @Value("${spring.mail.username}")
//     private String fromEmail;

//     public EmailService(JavaMailSender javaMailSender) {
//         this.javaMailSender = javaMailSender;
//     }

//     public void sendEmail(String to, String subject, String body) {
//         try {
//             MimeMessage mimeMessage = javaMailSender.createMimeMessage();
//             MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
//             helper.setFrom(fromEmail);
//             helper.setTo(to);
//             helper.setSubject(subject);
//             helper.setText(body, true);
//             javaMailSender.send(mimeMessage);
//             logger.info("Email sent to: {}", to);
//         } catch (MessagingException e) {
//             logger.error("Error sending email to: {}", to, e);
//         }
//     }

//     public void sendResetPasswordEmail(String to, String resetLink) {
//         String content = EmailUtils.createResetPasswordContent(resetLink);
//         sendEmail(to, "Reset Your Password", content);
//     }
// }
