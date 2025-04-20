import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerCreateNewDialogComponent } from './planner-create-new-dialog.component';

describe('PlannerCreateNewDialogComponent', () => {
  let component: PlannerCreateNewDialogComponent;
  let fixture: ComponentFixture<PlannerCreateNewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerCreateNewDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerCreateNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
