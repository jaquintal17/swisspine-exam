import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ExternalSystem } from '../../../models/external-system.model';

@Component({
  standalone : true,
  selector: 'app-external-system-details',
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  templateUrl: './external-system-details.component.html',
  styleUrl: './external-system-details.component.css'
})
export class ExternalSystemDetailsComponent {
  @Input() system! : ExternalSystem ;
  systemForEdit!:ExternalSystem;

  ngOnChanges(): void {
    this.systemForEdit = structuredClone(this.system);
  }

  displayFilled(value : string) {
    return value?.length > 0 ? 'FILLED' : '';
  }

  authMethods = ['API Key', 'OAuth', 'Basic Auth'];
}
