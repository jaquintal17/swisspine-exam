import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-external-system-create-new-dialog',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  templateUrl: './external-system-create-new-dialog.component.html',
  styleUrl: './external-system-create-new-dialog.component.css'
})
export class ExternalSystemCreateNewDialogComponent {
  systemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ExternalSystemCreateNewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.systemForm = this.fb.group({
      name: ['', Validators.required],
      baseUrl: ['', Validators.required],
      authenticationMethod: ['', Validators.required],
      key: ['', Validators.required],
      value: ['', Validators.required],
      authenticationPlace: ['Header', Validators.required]
    });
  }

  save() {
    if (this.systemForm.valid) {
      this.dialogRef.close(this.systemForm.value);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
