package com.example.swisspine.service;

import com.example.swisspine.entity.ExternalSystem;
import com.example.swisspine.repository.ExternalSystemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExternalSystemService {

    @Autowired
    private ExternalSystemRepository repository;

    public Page<ExternalSystem> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Optional<ExternalSystem> findById(String id) {
        return repository.findById(id);
    }

    public ExternalSystem save(ExternalSystem system) {
        return repository.save(system);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }

    public Page<ExternalSystem> searchByName(String name, Pageable pageable) {
        return  repository.findByNameContainingIgnoreCase(name, pageable);
    }
}