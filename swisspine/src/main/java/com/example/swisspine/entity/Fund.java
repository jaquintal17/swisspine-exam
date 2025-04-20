package com.example.swisspine.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class Fund {
    @Id
    private String id;
    private String fundName;
}