import { Component, Input } from '@angular/core';
import { Planner } from '../../../models/planner.model';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { PlannerDetailsComponent } from '../planner-details/planner-details.component';
import { NamedItem } from '../../../models/id-name.model';
import { Report } from '../../../models/report.model';

@Component({
  selector: 'app-planner-list',
  imports: [MatExpansionModule, MatButtonModule , MatIconModule ,
    MatButtonModule, FormsModule, MatFormFieldModule, CommonModule, 
    PlannerDetailsComponent   ],
  templateUrl: './planner-list.component.html',
  styleUrl: './planner-list.component.css'
})
export class PlannerListComponent {
  @Input() planners : Planner [] = [];
  @Input() sources! : NamedItem[];
  @Input() runs! : NamedItem[];
  @Input() reportTypes! : NamedItem[];
  @Input() reports! : Report[];

  constructor(private dialog: MatDialog) {}

  stopKey(event: KeyboardEvent) {
    event.stopPropagation();
  }

  delete(id : any) {

  }

  copy(id : any) {

  }
}
