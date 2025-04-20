package com.example.swisspine.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("runs")
@Data
public class Run {
    @Id
    private String id;
    private String name;
}
