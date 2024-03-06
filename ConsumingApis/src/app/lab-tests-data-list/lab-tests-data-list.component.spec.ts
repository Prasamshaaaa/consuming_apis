import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestsDataListComponent } from './lab-tests-data-list.component';

describe('LabTestsDataListComponent', () => {
  let component: LabTestsDataListComponent;
  let fixture: ComponentFixture<LabTestsDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestsDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestsDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
