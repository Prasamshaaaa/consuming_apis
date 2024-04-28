import { Component, OnInit } from '@angular/core';
import { LookUp, Lookups } from '../model/lab-test.model';
import { ApiServiceService } from '../api-service.service';
import { ApiResponse } from '../shared-kernel/api-response';
import { ENUM_APIResponseStatus, ENUM_LocaStorageKeys } from '../shared-kernel/shared-enums';
import { MatDialog } from '@angular/material';
import { UpdateLookupComponent } from '../update-lookup/update-lookup.component';

@Component({
  selector: 'app-look-ups',
  templateUrl: './look-ups.component.html',
  styleUrls: ['./look-ups.component.css']
})
export class LookUpsComponent implements OnInit {

  LookUps: LookUp[] = [];
  constructor(private apiservice: ApiServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.LoadLabLookUpsData();
  }


  LoadLabLookUpsData() {

    this.apiservice.getLabLookUp().subscribe(
      (res: ApiResponse<LookUp[]>) => {
        if (res && res.Status === ENUM_APIResponseStatus.Success) {
          if (res.Results) {
            this.LookUps = res.Results;
            localStorage.setItem(ENUM_LocaStorageKeys.LookUps, JSON.stringify(this.LookUps));
          } else {
            console.info('There is no Report Template Data Available');
          }
        } else {
          console.info('Error fetching the data', res);
        }
      },
      (error) => {
        console.error('Error fetching the data:', error);
      }
    );

  }

  EditLookUpsData(data: Lookups, index: number) {

    const dialogREf = this.dialog.open(UpdateLookupComponent,
      {
        width: '55%',
        height: '90%',
        data: {
          UpdateLookUps: data, // passing the entire object to the UpdateReportTemplateComponent



        }

      });

  }

}