package com.example.swisspine.repository;

import com.example.swisspine.entity.Source;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SourceRepository extends MongoRepository<Source, String> {
}
