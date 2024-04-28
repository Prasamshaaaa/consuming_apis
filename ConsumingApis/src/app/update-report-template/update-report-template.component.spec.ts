import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReportTemplateComponent } from './update-report-template.component';

describe('UpdateReportTemplateComponent', () => {
  let component: UpdateReportTemplateComponent;
  let fixture: ComponentFixture<UpdateReportTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReportTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReportTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
