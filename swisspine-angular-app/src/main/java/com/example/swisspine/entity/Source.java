package com.example.swisspine.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("sources")
@Data
public class Source {
    @Id
    private String id;
    private String name;
}
