import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ExternalSystemDetailsComponent } from '../external-system-details/external-system-details.component';
import { ExternalSystem } from '../../../models/external-system.model';

@Component({
  selector: 'app-external-system-list',
  imports: [MatExpansionModule, MatButtonModule , MatIconModule ,
    MatButtonModule, FormsModule, MatFormFieldModule, CommonModule, 
    ExternalSystemDetailsComponent   
   ],
  templateUrl: './external-system-list.component.html',
  styleUrl: './external-system-list.component.css'
})
export class ExternalSystemListComponent {
  @Input() systems : ExternalSystem [] = [];

  constructor(private dialog: MatDialog) {}

  stopKey(event: KeyboardEvent) {
    event.stopPropagation();
  }

  delete(id : any) {

  }

  copy(id : any) {

  }
}
