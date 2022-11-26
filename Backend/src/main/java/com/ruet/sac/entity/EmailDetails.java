package com.ruet.sac.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class EmailDetails {

    private String recipient;
    private String subject;
    private String template;
    private Map<String, Object> properties;
}
