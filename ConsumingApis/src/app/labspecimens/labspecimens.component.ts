import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { LabSpecimenData, LabResult } from '../model/lab-specimens';
import { MatDialog } from '@angular/material';
import { AddSpecimentDialogComponent } from './specimen-add/speciment-add.component';
import { ApiResponse } from '../shared-kernel/api-response';
import { ENUM_APIResponseStatus } from '../shared-kernel/shared-enums';



@Component({
  selector: 'app-labspecimens',
  templateUrl: './labspecimens.component.html',
  styleUrls: ['./labspecimens.component.css']
})
export class LabspecimensComponent implements OnInit {

  labSpecimenData: LabSpecimenData[] = [];
  newSpecimen: string = '';

  showPopup: boolean = false;


  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }

  ngOnInit() {

    this.GetSpecimen();

    // Making a request to the API endpoint with the token

  }



  addLabSpecimensData(newSpecimen: string) {

    this.apiService.postLabSpecimensData(newSpecimen).subscribe(
      (response: ApiResponse<any>) => {
        if (response.Status === ENUM_APIResponseStatus.Success) {
          this.GetSpecimen();
        } else {
          console.error(`Cannot add Lab Specimen Data`);
        }

      },

      (error) => {
        console.error('Error adding specimen:', error);
      }

    );

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSpecimentDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.addLabSpecimensData(result);
      }
    });
  }

  GetSpecimen() {
    this.apiService.getLabSpecimensData().subscribe(
      (data: ApiResponse<Array<LabSpecimenData>>) => {
        if (data && data.Results) {
          this.labSpecimenData = data.Results;

          // Store the data in local storage
          localStorage.setItem('labSpecimenData', JSON.stringify(this.labSpecimenData));
        }
      },
      (error) => {
        console.error('Error fetching the data:', error);
      }
    );
  }

}
