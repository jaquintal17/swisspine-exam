package com.example.swisspine.controller;

import com.example.swisspine.entity.Run;
import com.example.swisspine.service.RunService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/runs")
public class RunController {

    @Autowired
    private RunService service;

    @GetMapping
    public List<Run> findAll() {
        return service.findAll();
    }
}
