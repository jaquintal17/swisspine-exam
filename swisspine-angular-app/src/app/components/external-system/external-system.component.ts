import { Component } from '@angular/core';
import { ExternalSystemListComponent } from './external-system-list/external-system-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ExternalSystemCreateNewDialogComponent } from './external-system-create-new-dialog/external-system-create-new-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ExternalSystem } from '../../models/external-system.model';
import { ExternalSystemService } from '../../services/external-system.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-external-system',
  imports: [ExternalSystemListComponent, 
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule
   ],
  providers : [
    ExternalSystemService
  ], 
  templateUrl: './external-system.component.html',
  styleUrl: './external-system.component.css'
})
export class ExternalSystemComponent {
  searchTerm : string = "";
  systems: ExternalSystem[] = [];
  totalCount: number = 0;

  pageSize = 5;
  pageIndex = 0;

  ngOnInit(): void {
    this.loadSystems();
  }
  
  constructor(private dialog: MatDialog, private externalSystemService : ExternalSystemService) {
  }

  createNewSystem() {
    const dialogRef = this.dialog.open(ExternalSystemCreateNewDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.externalSystemService.createSystem(result).subscribe({
          next: (created) => {
            console.log('System created:', created);
            this.loadSystems(); // Refresh list after creation
          },
          error: (err) => {
            console.error('Failed to create system', err);
          }
        });
      }
    });
  }

  loadSystems() {
    this.externalSystemService.getAll(this.pageIndex, this.pageSize, this.searchTerm).subscribe({
      next: (data) => {
        this.systems = data.items;
        this.totalCount = data.totalCount;
      },
      error: (err) => {
        console.error('Failed to load systems', err);
      }
    });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadSystems();
  }

  onSearch() {
    this.pageIndex = 0; // reset to first page on new search
    this.loadSystems();
  }
}