package com.example.swisspine.controller;

import com.example.swisspine.entity.Source;
import com.example.swisspine.service.SourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sources")
public class SourceController {
    @Autowired
    private SourceService service;

    @GetMapping
    public List<Source> findAll() {
        return service.findAll();
    }
}
