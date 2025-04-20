import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSystemListComponent } from './external-system-list.component';

describe('ExternalSystemListComponent', () => {
  let component: ExternalSystemListComponent;
  let fixture: ComponentFixture<ExternalSystemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalSystemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalSystemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
