package com.example.swisspine.controller;

import com.example.swisspine.entity.ExternalSystem;
import com.example.swisspine.service.ExternalSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/external-systems")
public class ExternalSystemController {

    @Autowired
    private ExternalSystemService service;

    @GetMapping
    public Map<String, Object> getAll(@RequestParam(defaultValue = "") String search,
                                      @RequestParam(defaultValue = "0") int page,
                                      @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ExternalSystem> pageResult;

        if (search.isBlank()) {
            pageResult = service.findAll(pageable);
        } else {
            pageResult = service.searchByName(search, pageable);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("items", pageResult.getContent());
        response.put("totalCount", pageResult.getTotalElements());

        return response;
    }

    @GetMapping("/{id}")
    public ExternalSystem getById(@PathVariable String id) {
        return service.findById(id).orElseThrow();
    }

    @PostMapping
    public ExternalSystem create(@RequestBody ExternalSystem system) {
        return service.save(system);
    }

    @PutMapping("/{id}")
    public ExternalSystem update(@PathVariable String id, @RequestBody ExternalSystem system) {
        system.setId(id);
        return service.save(system);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}