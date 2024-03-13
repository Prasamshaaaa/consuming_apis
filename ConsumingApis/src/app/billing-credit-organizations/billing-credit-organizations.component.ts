import { Component, OnInit } from '@angular/core';
import { BillingCreditOrganizations, Schemes } from '../model/billingmaster';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { MesssagesService } from '../shared-kernel/messages.service';
import { ApiResponse } from '../shared-kernel/api-response';
import { ENUM_LocaStorageKeys } from '../shared-kernel/shared-enums';

@Component({
  selector: 'app-billing-credit-organizations',
  templateUrl: './billing-credit-organizations.component.html',
  styleUrls: ['./billing-credit-organizations.component.css']
})
export class BillingCreditOrganizationsComponent implements OnInit {

  BillingCategoryForm: FormGroup;
  billingCreditOrganization: BillingCreditOrganizations[] = [];

  billingCreditOrganizationSubscription = new Subscription();
  constructor(private _apiService: ApiServiceService, private _messageService: MesssagesService, private _fb: FormBuilder) {

    this.getBillingCreditOrganization();
    this.InitializeSubscriptions();

  }

  InitializeSubscriptions() {
    this.billingCreditOrganizationSubscription.add(this._messageService.SchemeChangeEvent().subscribe((scheme) => {
      this.handleSchemeChange(scheme);
    }, err => {
      console.error(err);
    }));
  }

  handleSchemeChange(scheme: Schemes) {
    if (scheme && scheme.DefaultCreditOrganizationId) {
      const billingCreditOrganization = this.billingCreditOrganization.find(p => p.OrganizationId === scheme.DefaultPriceCategoryId);
      if (billingCreditOrganization) {
        this.BillingCategoryForm.get('OrganizationId').setValue(billingCreditOrganization.OrganizationId);
      } else {
        this.setDefaultBillingCreditOrganization();
      }
    }
  }

  ngOnInit() {
    this.BillingCategoryForm = this._fb.group({
      OrganizationId: Validators.compose([null])
    });
  }

  getBillingCreditOrganization(): void {
    this.billingCreditOrganizationSubscription.add(this._apiService.getBillingCreditOrganizations().subscribe(
      (res: ApiResponse<BillingCreditOrganizations[]>) => {
        if (res.Results) {

          //sorting this array alphabetically
          this.billingCreditOrganization = res.Results.sort((a, b) => a.DisplayName.localeCompare(b.DisplayName));
          localStorage.setItem(ENUM_LocaStorageKeys.billingCreditOrganization, JSON.stringify(this.billingCreditOrganization));
        }
        else {
          console.info(`There are no billing credit prganization data available`);
        }
      },
      (error) => {
        console.log('Error fetching the data:', error);
      }
    ));
  }

  ngOnDestroy(): void {
    this.billingCreditOrganizationSubscription.unsubscribe();
  }

  setDefaultBillingCreditOrganization() {
    if (this.billingCreditOrganization && this.billingCreditOrganization.length) {
      const defaultBillingCreditOrganization = this.billingCreditOrganization.find(p => p.IsDefault);
      if (defaultBillingCreditOrganization) {
        this.BillingCategoryForm.get('OrganizationId').setValue(defaultBillingCreditOrganization.OrganizationId);
      }
    } else {
      const billingCreditOrganizations = this.billingCreditOrganization[0];
      this.BillingCategoryForm.get('OrganizationId').setValue(billingCreditOrganizations.OrganizationId);
    }
  }

}
