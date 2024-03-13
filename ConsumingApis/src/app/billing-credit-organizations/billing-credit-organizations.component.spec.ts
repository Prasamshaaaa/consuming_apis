import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCreditOrganizationsComponent } from './billing-credit-organizations.component';

describe('BillingCreditOrganizationsComponent', () => {
  let component: BillingCreditOrganizationsComponent;
  let fixture: ComponentFixture<BillingCreditOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingCreditOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingCreditOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
