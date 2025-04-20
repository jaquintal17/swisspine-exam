package com.example.swisspine.repository;

import com.example.swisspine.entity.Run;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RunRepository extends MongoRepository<Run, String> {
}
