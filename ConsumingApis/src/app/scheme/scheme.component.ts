import { Component, OnInit } from '@angular/core';
import { Schemes } from '../model/billingmaster';
import { ApiServiceService } from '../api-service.service';
import { ApiResponse } from '../shared-kernel/api-response';
import { ENUM_APIResponseStatus, ENUM_LocaStorageKeys } from '../shared-kernel/shared-enums';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MesssagesService } from '../shared-kernel/messages.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {
  schemes: Schemes[] = [];


  selectedScheme: Schemes;

  SchemeForm: FormGroup;


  constructor(private apiService: ApiServiceService, private _fb: FormBuilder, private _messagesService: MesssagesService) { }

  ngOnInit() {
    this.SchemeForm = this._fb.group({
      SchemeId: Validators.compose([null])
    })

    this.getSchemes();
  }

  // Making a request to the API endpoint for schemes
  private getSchemes() {
    this.apiService.getBillingSchemes('op-billing').subscribe(
      (res: ApiResponse<Schemes[]>) => {
        if (res && res.Status === ENUM_APIResponseStatus.Success) {
          if (res.Results) {
            this.schemes = res.Results.sort((a, b) => a.SchemeName.localeCompare(b.SchemeName));;

            // Find the default scheme 
            const defaultSceme = this.schemes.find(scheme => scheme.IsSystemDefault);
            if (defaultSceme) {
              this.SchemeForm.get('SchemeId').setValue(defaultSceme.SchemeId);
              this._messagesService.TriggerSchemeChangeEvent(defaultSceme);
            }
            localStorage.setItem(ENUM_LocaStorageKeys.Schemes, JSON.stringify(this.schemes));

          }
          else {
            console.info(`There are no Schemes Available`);

          }
        } else {
          console.error(`Error fetching the data ${res}`);

        }
      },
      (error) => {
        console.error('Error fetching the data:', error);

      }
    );
  }

  onSchemeSelected($event) {
    if ($event) {
      const schemeId = +$event.target.value;
      const scheme = this.schemes.find(s => s.SchemeId === schemeId);
      if (scheme) {
        this._messagesService.TriggerSchemeChangeEvent(scheme);

      }
    }
  }

}


