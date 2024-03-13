import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabspecimensComponent } from './labspecimens.component';

describe('LabspecimensComponent', () => {
  let component: LabspecimensComponent;
  let fixture: ComponentFixture<LabspecimensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabspecimensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabspecimensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
