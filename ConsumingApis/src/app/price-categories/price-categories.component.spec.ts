import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCategoriesComponent } from './price-categories.component';

describe('PriceCategoriesComponent', () => {
  let component: PriceCategoriesComponent;
  let fixture: ComponentFixture<PriceCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
