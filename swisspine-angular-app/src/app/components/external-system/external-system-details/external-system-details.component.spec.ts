import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSystemDetailsComponent } from './external-system-details.component';

describe('ExternalSystemDetailsComponent', () => {
  let component: ExternalSystemDetailsComponent;
  let fixture: ComponentFixture<ExternalSystemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalSystemDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalSystemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
