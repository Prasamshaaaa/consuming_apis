import { Component, OnInit, Inject } from '@angular/core';
import { LookUp, Lookups } from '../model/lab-test.model';
import { ApiServiceService } from '../api-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-lookup',
  templateUrl: './update-lookup.component.html',
  styleUrls: ['./update-lookup.component.css']
})
export class UpdateLookupComponent implements OnInit {

  UpdatedLookUps: LookUp = new LookUp();
  LookUpDataJson: Array<string> = new Array<string>();
  constructor(
    public dialogRef: MatDialogRef<UpdateLookupComponent>, // Injects MatDialogRef for the dialog reference
    @Inject(MAT_DIALOG_DATA) public data: { UpdateLookUps: LookUp }, // Injects data passed to the dialog
    private apiService: ApiServiceService // Injects ApiServiceService for API service interaction

  ) { }

  ngOnInit() {
    this.UpdatedLookUps = this.data.UpdateLookUps;
    this.LookUpDataJson = JSON.parse(this.UpdatedLookUps.LookupDataJson);
    console.log(this.LookUpDataJson);

  }

  ClosePopUp() {
    this.dialogRef.close();
  }


  addRow() {
    this.LookUpDataJson.push('');
    // const newLookUpData = data;
    // this.LookUpDataJson.push(newLookUpData);
    console.log(this.LookUpDataJson);
  }

  removeRow(index: number) {
    this.LookUpDataJson.splice(index, 1);
  }

  updateLabTest() {
    this.dialogRef.close();
    this.UpdatedLookUps.LookupDataJson = JSON.stringify(this.LookUpDataJson);

  }

}
