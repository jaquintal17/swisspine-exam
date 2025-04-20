package com.example.swisspine.service;

import com.example.swisspine.entity.ExternalSystem;
import com.example.swisspine.entity.Planner;
import com.example.swisspine.repository.PlannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlannerService {

    @Autowired
    private PlannerRepository repository;

    public Page<Planner> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Optional<Planner> findById(String id) {
        return repository.findById(id);
    }

    public Planner save(Planner planner) {
        return repository.save(planner);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }

    public Page<Planner> searchByName(String name, Pageable pageable) {
        return  repository.findByNameContainingIgnoreCase(name, pageable);
    }
}