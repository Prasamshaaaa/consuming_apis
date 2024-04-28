import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLookupComponent } from './update-lookup.component';

describe('UpdateLookupComponent', () => {
  let component: UpdateLookupComponent;
  let fixture: ComponentFixture<UpdateLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
