package com.example.swisspine.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("external_systems")
@Data
public class ExternalSystem {

    @Id
    private String id;
    @Indexed
    private String name;
    private String baseUrl;
    private String authenticationMethod;  // e.g., API Key, OAuth, etc.
    private String key;                   // e.g., "Authorization", "X-API-Key"
    private String value;                 // e.g., actual token or API key
    private String authenticationPlace;   // e.g., "header", "query", "body"
}
