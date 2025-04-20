import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PlannerService } from '../../services/planner.service';
import { Planner } from '../../models/planner.model';
import { PlannerListComponent } from './planner-list/planner-list.component';
import { SourceService } from '../../services/source.service';
import { NamedItem } from '../../models/id-name.model';
import { RunService } from '../../services/run.service';
import { ReportService } from '../../services/report.service';
import { ReportTypeService } from '../../services/report-types.service';
import { Report } from '../../models/report.model';

@Component({
  selector: 'app-planner',
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    PlannerListComponent
   ],
  providers : [PlannerService, SourceService, RunService, ReportService, ReportTypeService], 
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent {
  searchTerm : string = "";
  totalCount: number = 0;
  planners : Planner[] = [];
  pageSize = 5;
  pageIndex = 0;
  sources! : NamedItem[];
  runs! : NamedItem[];
  reports! : Report [];
  reportTypes! : NamedItem[];

  constructor(private dialog: MatDialog, 
    private plannerService : PlannerService, 
    private sourceService : SourceService,
    private reportService : ReportService,
    private reportTypeService : ReportTypeService,
    private runService : RunService
  ) {
  }

  ngOnInit(): void {
    this.loadRuns();
    this.loadPlanners();
    this.loadSources();
    this.loadReports();
    this.loadReportTypes();
  }

  loadReportTypes() {
    this.reportTypeService.getAll().subscribe({
      next: (data) => {
        this.reportTypes = data;
      },
      error: (err) => {
        console.error('Failed to load systems', err);
      }
    });
  }

  loadReports() {
    this.reportService.getAll().subscribe({
      next: (data) => {
        this.reports = data;
      },
      error: (err) => {
        console.error('Failed to load systems', err);
      }
    });
  }

  loadRuns() {
    this.runService.getAll().subscribe({
      next: (data) => {
        this.runs = data;
      },
      error: (err) => {
        console.error('Failed to load systems', err);
      }
    });
  }

  loadSources() {
    this.sourceService.getAll().subscribe({
      next: (data) => {
        this.sources = data;
      },
      error: (err) => {
        console.error('Failed to load systems', err);
      }
    });
  }

  loadPlanners() {
    this.plannerService.getAll(this.pageIndex, this.pageSize, this.searchTerm).subscribe({
      next: (data) => {
        this.planners = data.items;
        this.totalCount = data.totalCount;
        console.log('Planners', this.planners);
      },
      error: (err) => {
        console.error('Failed to load systems', err);
      }
    });
  }

  createNewPlanner() {

  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPlanners();
  }

  onSearch() {
    this.pageIndex = 0; // reset to first page on new search
    this.loadPlanners();
  }
}
