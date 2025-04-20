package com.example.swisspine.repository;

import com.example.swisspine.entity.ExternalSystem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExternalSystemRepository extends MongoRepository<ExternalSystem, String> {
    Page<ExternalSystem> findByNameContainingIgnoreCase(String name, Pageable pageable);
}
