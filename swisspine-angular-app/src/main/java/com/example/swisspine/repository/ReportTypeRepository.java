package com.example.swisspine.repository;

import com.example.swisspine.entity.ReportType;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReportTypeRepository extends MongoRepository<ReportType, String> {
}
