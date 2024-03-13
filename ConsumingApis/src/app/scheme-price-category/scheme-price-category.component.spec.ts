import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemePriceCategoryComponent } from './scheme-price-category.component';

describe('SchemePriceCategoryComponent', () => {
  let component: SchemePriceCategoryComponent;
  let fixture: ComponentFixture<SchemePriceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemePriceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemePriceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
