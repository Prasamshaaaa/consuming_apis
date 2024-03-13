import { Component, OnInit } from '@angular/core';
import { PriceCategory, Schemes } from '../model/billingmaster';
import { ApiServiceService } from '../api-service.service';
import { ApiResponse } from '../shared-kernel/api-response';
import { ENUM_APIResponseStatus, ENUM_LocaStorageKeys } from '../shared-kernel/shared-enums';
import { MesssagesService } from '../shared-kernel/messages.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-price-categories',
  templateUrl: './price-categories.component.html',
  styleUrls: ['./price-categories.component.css']
})
export class PriceCategoriesComponent implements OnInit {

  PriceCategoryForm: FormGroup;

  priceCategories: PriceCategory[] = [];
  priceCategoryComponentSubscriptions = new Subscription();  // unsubscribe garna banako jati ota subscriptions ni add garna mily
  constructor(private apiService: ApiServiceService, private _messagesService: MesssagesService, private _fb: FormBuilder) {
    this.getPriceCategories();
    this.InitializeSubscriptions();
  }
  InitializeSubscriptions() {
    this.priceCategoryComponentSubscriptions.add(this._messagesService.SchemeChangeEvent().subscribe((scheme) => {
      this.handleSchemeChange(scheme);
    }, err => {
      console.error(err);
    }));
  }

  ngOnInit() {
    this.PriceCategoryForm = this._fb.group({
      PriceCategoryId: Validators.compose([null])
    });
    this.InitializeSubscriptions();

  }

  getPriceCategories(): void {
    this.priceCategoryComponentSubscriptions.add(this.apiService.getPriceCategories().subscribe(
      (res: ApiResponse<PriceCategory[]>) => {
        if (res && res.Status === ENUM_APIResponseStatus.Success) {
          if (res.Results) {
            this.priceCategories = res.Results;
            localStorage.setItem(ENUM_LocaStorageKeys.priceCategories, JSON.stringify(this.priceCategories));

          }
          else {
            console.info(`There are no price categories Available`);

          }
        } else {
          console.error(`Error fetching the data ${res}`);

        }
      },
      (error) => {
        console.error('Error fetching the data:', error);

      }
    ));

  }


  // For efficient memory management
  ngOnDestroy(): void {
    this.priceCategoryComponentSubscriptions.unsubscribe();
  }

  handleSchemeChange(scheme: Schemes): void {
    if (scheme && scheme.DefaultPriceCategoryId) {
      const priceCategory = this.priceCategories.find(p => p.PriceCategoryId === scheme.DefaultPriceCategoryId);
      if (priceCategory) {
        this.PriceCategoryForm.get('PriceCategoryId').setValue(priceCategory.PriceCategoryId);
      } else {
        this.setSystemDefaultPriceCategory();
      }
    }

  }

  private setSystemDefaultPriceCategory() {
    if (this.priceCategories && this.priceCategories.length) {
      const defaultPriceCategory = this.priceCategories.find(p => p.IsDefault);
      if (defaultPriceCategory) {
        this.PriceCategoryForm.get('PriceCategoryId').setValue(defaultPriceCategory.PriceCategoryId);
      } else {
        const priceCategory = this.priceCategories[0];
        this.PriceCategoryForm.get('PriceCategoryId').setValue(priceCategory.PriceCategoryId);
      }
    }
  }


}

