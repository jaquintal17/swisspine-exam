package com.example.swisspine.service;

import com.example.swisspine.entity.Source;
import com.example.swisspine.repository.SourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SourceService {
    @Autowired
    private SourceRepository repository;

    public List<Source> findAll() {
        return repository.findAll();
    }

}
