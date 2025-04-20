package com.example.swisspine.repository;

import com.example.swisspine.entity.Report;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReportRepository extends MongoRepository<Report, String> {
}
