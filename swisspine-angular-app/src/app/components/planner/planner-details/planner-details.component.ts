import { Component, Input } from '@angular/core';
import { Planner } from '../../../models/planner.model';
import { ExternalSystem } from '../../../models/external-system.model';
import { Fund } from '../../../models/fund.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NamedItem } from '../../../models/id-name.model';
import { Report } from '../../../models/report.model';

@Component({
  selector: 'app-planner-details',
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './planner-details.component.html',
  styleUrl: './planner-details.component.css'
})
export class PlannerDetailsComponent {
  @Input() planner!: Planner;
  plannerForEdit!: Planner;
  availableFunds = ["Fund 1", "Fund 2"];
  availableAliases = ["Alias 1"];
  @Input() sources! : NamedItem[];
  @Input() runs! : NamedItem[];
  @Input() reportTypes! : NamedItem[];
  @Input() reports! : Report[];

  ngOnChanges(): void {
    this.plannerForEdit = structuredClone(this.planner);
  }

  addFund() {
    this.plannerForEdit.funds.push({ name: '', alias: '' });
  }
  
  removeFund(index: number) {
    this.plannerForEdit.funds.splice(index, 1);
  }

  removeSource(index: number) {
    this.plannerForEdit.sources.splice(index, 1);
  }

  addSource() {
    this.plannerForEdit.sources.push({id : this.sources[0].id, name : ''});
  }

  removeRun(index: number) {
    this.plannerForEdit.runs.splice(index, 1);
  }

  addRun() {
    this.plannerForEdit.runs.push({id : this.runs[0].id, name : ''});
  }

  removeReport(index: number) {
    this.plannerForEdit.reports.splice(index, 1);
  }

  addReport() {
    this.plannerForEdit.reports.push({id : this.reports[0].id, name : '', reportType :{id : '', name : ''}});
  }
}
