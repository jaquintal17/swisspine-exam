package com.example.swisspine.controller;

import com.example.swisspine.entity.Report;
import com.example.swisspine.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private ReportService service;

    @GetMapping
    public List<Report> findAll() {
        return service.findAll();
    }

}
