package com.example.swisspine.service;

import com.example.swisspine.entity.Report;
import com.example.swisspine.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    @Autowired
    private ReportRepository repository;

    public List<Report> findAll() {
        return repository.findAll();
    }

}
