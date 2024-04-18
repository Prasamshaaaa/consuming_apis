import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { LabTest, LabTestResult } from '../model/lab-test.model';
import { ApiResponse } from '../shared-kernel/api-response';
import { ENUM_APIResponseStatus, ENUM_LocaStorageKeys } from '../shared-kernel/shared-enums';
import { UpdateLabTestsComponent } from '../update-lab-tests/update-lab-tests.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lab-tests-data-list',
  templateUrl: './lab-tests-data-list.component.html',
  styleUrls: ['./lab-tests-data-list.component.css']

})
export class LabTestsDataListComponent implements OnInit {

  labTests: LabTest[] = [];

  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }
  openUpdateLabTest(labTest: any) {
    const dialogRef = this.dialog.open(UpdateLabTestsComponent, {
      width: '95%',
      height: '90%',
      data: {
        labTest: labTest
      } //passing the entire labTest data to the UpdateLabTestsComponent

    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit() {

    // Making a request to the API endpoint with the token
    this.apiService.getLabTestData().subscribe(
      (res: ApiResponse<LabTest[]>) => {
        if (res && res.Status === ENUM_APIResponseStatus.Success) {
          if (res.Results) {
            this.labTests = res.Results;
            // Store the data in local storage
            localStorage.setItem(ENUM_LocaStorageKeys.LabTests, JSON.stringify(this.labTests));
          } else {
            console.info(`There is no LabTests Available`);
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
}
