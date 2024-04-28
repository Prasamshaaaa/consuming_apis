import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListForFinalReportComponent } from './patient-list-for-final-report.component';

describe('PatientListForFinalReportComponent', () => {
  let component: PatientListForFinalReportComponent;
  let fixture: ComponentFixture<PatientListForFinalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListForFinalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListForFinalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
