package com.example.swisspine.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("report_types")
@Data
public class ReportType {
    @Id
    private String id;
    private String name;
}
