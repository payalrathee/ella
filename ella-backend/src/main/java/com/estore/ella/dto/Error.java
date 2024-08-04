package com.estore.ella.dto;

import lombok.Data;

import java.util.Map;

@Data
public class Error {
    private String error;
    private Map<String, String> fieldErrors;
}
