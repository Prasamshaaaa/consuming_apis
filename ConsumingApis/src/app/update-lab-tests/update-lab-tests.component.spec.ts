import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLabTestsComponent } from './update-lab-tests.component';

describe('UpdateLabTestsComponent', () => {
  let component: UpdateLabTestsComponent;
  let fixture: ComponentFixture<UpdateLabTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLabTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLabTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
