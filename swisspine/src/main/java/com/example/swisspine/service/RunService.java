package com.example.swisspine.service;

import com.example.swisspine.entity.Run;
import com.example.swisspine.repository.RunRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RunService {
    @Autowired
    private RunRepository repository;

    public List<Run> findAll() {
        return repository.findAll();
    }
}
