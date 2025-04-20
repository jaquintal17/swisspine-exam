package com.example.swisspine.service;

import com.example.swisspine.entity.Report;
import com.example.swisspine.entity.ReportType;
import com.example.swisspine.repository.ReportTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportTypeService {

    @Autowired
    private ReportTypeRepository repository;

    public List<ReportType> findAll() {
        return repository.findAll();
    }

}
