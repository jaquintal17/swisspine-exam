package com.example.swisspine.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("reports")
@Data
public class Report {
    @Id
    private String id;
    private String name;

    @DBRef
    private ReportType type;
}
