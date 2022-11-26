package com.ruet.sac.service;

import com.ruet.sac.entity.EmailDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService{

    @Value("${spring.mail.username}") private String sender;

    private final JavaMailSender emailSender;
    private final SpringTemplateEngine templateEngine;

    public Boolean sendConfirmationMessage(EmailDetails email) {
        try{

                MimeMessage message = emailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
                Context context = new Context();
                context.setVariables(email.getProperties());
                helper.setFrom(sender);
                helper.setTo(email.getRecipient());
                helper.setSubject(email.getSubject());
                String html = templateEngine.process(email.getTemplate(), context);
                helper.setText(html, true);
                emailSender.send(message);
                return true;
        }catch (Exception e)
        {
            return false;
        }

    }
}
