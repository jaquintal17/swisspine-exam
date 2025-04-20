package com.example.swisspine.controller;

import com.example.swisspine.entity.ReportType;
import com.example.swisspine.service.ReportTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/report-types")
public class ReportTypeController {

    @Autowired
    private ReportTypeService service;

    @GetMapping
    public List<ReportType> findAll() {
        return service.findAll();
    }

}