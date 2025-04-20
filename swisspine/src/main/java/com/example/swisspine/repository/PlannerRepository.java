package com.example.swisspine.repository;

import com.example.swisspine.entity.ExternalSystem;
import com.example.swisspine.entity.Planner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlannerRepository extends MongoRepository<Planner, String> {
    Page<Planner> findByNameContainingIgnoreCase(String name, Pageable pageable);
}
