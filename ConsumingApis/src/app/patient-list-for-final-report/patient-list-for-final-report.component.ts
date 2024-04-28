import { Component, OnInit } from '@angular/core';
import { PatientListForFinalReport, LabReport } from '../model/lab-test.model';
import { ApiServiceService } from '../api-service.service';
import { ApiResponse } from '../shared-kernel/api-response';
import { ENUM_LocaStorageKeys } from '../shared-kernel/shared-enums';
import { MatDialog } from '@angular/material';
import { ViewPatientDetailsComponent } from '../view-patient-details/view-patient-details.component';

@Component({
  selector: 'app-patient-list-for-final-report',
  templateUrl: './patient-list-for-final-report.component.html',
  styleUrls: ['./patient-list-for-final-report.component.css']
})
export class PatientListForFinalReportComponent implements OnInit {


  PatientListForFinalReport: PatientListForFinalReport[] = [];
  LabReport: LabReport = new LabReport();


  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }


  ngOnInit() {

    this.LoadPatientListForFinalReport();

  }

  LoadPatientListForFinalReport() {
    this.apiService.getPatientList().subscribe(
      (res: ApiResponse<PatientListForFinalReport[]>) => {
        if (res && res.Status) {
          if (res.Results) {
            this.PatientListForFinalReport = res.Results;
            localStorage.setItem(ENUM_LocaStorageKeys.PatientListForFinalReport, JSON.stringify(this.PatientListForFinalReport));
          } else {
            console.info(`There is no data available`);
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


  LoadLabReport(data: PatientListForFinalReport, index: number) {


    const LabRequisitionIdCSV: number[] = data.LabRequisitionIdCSV.split(',').map(Number);


    this.apiService.getLabReport(LabRequisitionIdCSV).subscribe(
      (res: ApiResponse<LabReport>) => {
        if (res && res.Status) {
          if (res.Results) {
            const dialogRef = this.dialog.open(ViewPatientDetailsComponent, {
              width: '95%',
              height: '90%',
              data: {
                LabReport: res.Results, //Passing lab report data to the dialog
              }
            });
            localStorage.setItem(ENUM_LocaStorageKeys.LabReport, JSON.stringify(this.LabReport));
          } else {
            console.info(`There is no data available`);
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




  CalculateAge() {


  }


}
