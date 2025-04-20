import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSystemCreateNewDialogComponent } from './external-system-create-new-dialog.component';

describe('ExternalSystemCreateNewDialogComponent', () => {
  let component: ExternalSystemCreateNewDialogComponent;
  let fixture: ComponentFixture<ExternalSystemCreateNewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalSystemCreateNewDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalSystemCreateNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
