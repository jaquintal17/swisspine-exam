package com.example.swisspine;

import com.example.swisspine.entity.*;
import com.example.swisspine.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ExternalSystemRepository externalSystemRepository;

    @Autowired
    private PlannerRepository plannerRepository;

    @Autowired
    private RunRepository runRepository;

    @Autowired
    private SourceRepository sourceRepository;

    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private ReportTypeRepository reportTypeRepository;

    @Override
    public void run(String... args) throws Exception {
        //delete all
        reportTypeRepository.deleteAll();
        reportRepository.deleteAll();
        sourceRepository.deleteAll();
        runRepository.deleteAll();
        externalSystemRepository.deleteAll();
        plannerRepository.deleteAll();

        if (reportTypeRepository.count() == 0) {
            for (int i = 1; i <= 10; i++) {
                ReportType reportType = new ReportType();
                reportType.setName("Report Type" + i);
                reportTypeRepository.save(reportType);
            }
        }

        if (reportRepository.count() == 0) {
            ReportType reportType = reportTypeRepository.findAll().stream().findAny().get();
            for (int i = 1; i <= 10; i++) {
                Report report = new Report();
                report.setName("Report " + i);
                report.setType(reportType);
                reportRepository.save(report);
            }
        }

        if (runRepository.count() == 0) {
            for (int i = 1; i <= 10; i++) {
                Run run = new Run();
                run.setName("Run " + i);
                runRepository.save(run);
            }
        }

        if (sourceRepository.count() == 0) {
            for (int i = 1; i <= 10; i++) {
                Source source = new Source();
                source.setName("Source " + i);
                sourceRepository.save(source);
            }
        }

        if (externalSystemRepository.count() == 0) {
            // Create 10 sample entities
            for (int i = 1; i <= 10000; i++) {
                ExternalSystem entity = new ExternalSystem();
                entity.setName("Sample Name " + i);
                entity.setBaseUrl("https://api.example" + i + ".com");
                entity.setAuthenticationMethod("API Key");
                entity.setKey("X-API-Key");
                entity.setValue("api-key-" + i);
                entity.setAuthenticationPlace("header");

                externalSystemRepository.save(entity);
            }
        }

        if (plannerRepository.count() == 0) {
            ExternalSystem externalSystem = externalSystemRepository.findAll().stream().findFirst()
                    .orElseThrow(() -> new RuntimeException("No ExternalSystem found. Seed one first."));
            Source source = sourceRepository.findAll().stream().findFirst().get();
            Run run = runRepository.findAll().stream().findFirst().get();
            Report report = reportRepository.findAll().stream().findFirst().get();


            for (int i = 1; i <= 10000; i++) {
                Planner planner = new Planner();
                planner.setName("Planner " + i);
                planner.setDescription("This is test planner #" + i);
                planner.setPlannerType(i % 2 == 0 ? "Scheduled" : "On-Demand");
                planner.setExternalSystem(externalSystem);
                planner.setTriggers(List.of("Runs"));
                planner.setSources(List.of(source));
                planner.setFunds(List.of());
                planner.setRuns(List.of(run));
                planner.setReports(List.of(report));
                planner.setOwner("owner" + i + "@swisspine.ai");

                plannerRepository.save(planner);
            }
        }

        System.out.println("Data have been initialized");
    }
}
