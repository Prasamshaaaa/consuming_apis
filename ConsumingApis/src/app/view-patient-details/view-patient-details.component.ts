import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ComponentJSON, LabReport, Lookups, PatientListForFinalReport, ReportTemplate, Template, Test, SignatoryData } from '../model/lab-test.model';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-patient-details',
  templateUrl: './view-patient-details.component.html',
  styleUrls: ['./view-patient-details.component.css']
})
export class ViewPatientDetailsComponent implements OnInit {

  ViewPatientDetails: LabReport = new LabReport();
  Lookups: Lookups = new Lookups();

  Template: Template[] = [];

  Test: Test[] = [];

  Component: Component[] = [];

  Signature: SignatoryData[] = []; //Array xa vane loop lagayera prop access garni...


  constructor(
    public dialogRef: MatDialogRef<ViewPatientDetailsComponent>, // Injects MatDialogRef for the dialog reference
    @Inject(MAT_DIALOG_DATA) public data: { LabReport: LabReport }, // Injects data passed to the dialog
    private apiService: ApiServiceService // Injects ApiServiceService for API service interaction

  ) { }

  ngOnInit() {
    this.ViewPatientDetails = this.data.LabReport;
    this.Lookups = this.data.LabReport.Lookups;
    this.Template = this.ViewPatientDetails.Templates;
    this.Signature = JSON.parse(this.ViewPatientDetails.Signatories);


    console.log(this.Signature);
  }


  closePopup() {
    this.dialogRef.close();
  }


}
