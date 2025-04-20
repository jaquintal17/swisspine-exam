package com.example.swisspine.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("planners")
@Data
public class Planner {

    @Id
    private String id;

    @Indexed
    private String name;
    private String description;
    private String plannerType; // e.g., "Scheduled", "On-Demand"

    // Reference to ExternalSystem
    @DBRef
    private ExternalSystem externalSystem;

    private List<Fund> funds;

    private List<String> triggers;

    private List<Source> sources;
    private List<Run> runs;
    private List<Report> reports;

    private String owner;
}
