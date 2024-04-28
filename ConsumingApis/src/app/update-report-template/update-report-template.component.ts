import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ReportTemplate } from '../model/lab-test.model';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-update-report-template',
  templateUrl: './update-report-template.component.html',
  styleUrls: ['./update-report-template.component.css']
})
export class UpdateReportTemplateComponent implements OnInit {


  UpdatedReportTemplate: ReportTemplate;

  // templateAdded: EventEmitter<ReportTemplate> = new EventEmitter<ReportTemplate>();


  TestNumberOrString: number | string;
  ColSetting: Array<Array<string | boolean>> = [];
  @Input() isEditMode: boolean;  // @Input use garda constructor ma initialize garna mildaina, ngOnInit ma garna parxaa

  constructor(public dialogRef: MatDialogRef<UpdateReportTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { reporttemplate: ReportTemplate },
    private apiService: ApiServiceService

  ) {


  }

  ngOnInit() {

    //When not in edit mode, we have to initialize it with the default values

    if (!this.isEditMode) {
      this.UpdatedReportTemplate = new ReportTemplate(
   /* ColSettingsJSON */ " ",
  /* CreatedBy */ 0,
  /* CreatedOn */ new Date(),
  /* Description */ " ",
  /* DisplaySequence */ 1,
  /* FooterText */ " ",
  /* HeaderText */ " ",
  /* IsActive */ false,
  /* IsDefault */ false,
  /* ModifiedBy */ 0,
  /* NegativeTemplateFileName */ " ",
  /* ReportTemplateID */ 0,
  /* ReportTemplateName */ " ",
  /* ReportTemplateShortName */ " ",
  /* TemplateFileName */ " ",
  /* TemplateHTML */ " ",
  /* TemplateType */ " ",
  /* ModifiedOn */ null
      );
      this.ColSetting.push(['Name', false])
      this.ColSetting.push(['Result', false])
      this.ColSetting.push(['Range', false])
      this.ColSetting.push(['Method', false])
      this.ColSetting.push(['Unit', false])
      this.ColSetting.push(['Remarks', false])

    }
    else {
      this.UpdatedReportTemplate = this.data.reporttemplate;

      //string lai object ma nai object lai array ma lageko
      let ColSettings = JSON.parse(this.UpdatedReportTemplate.ColSettingsJSON);
      this.ColSetting = Object.entries(ColSettings);
    }
  }


  closePopup() {
    this.dialogRef.close();
  }


  UpdateReportTemplate() {

    //Converting the array into object and object back into string...
    const object = {};
    for (let [key, value] of this.ColSetting) {
      object[key.toString()] = value;
    }

    this.UpdatedReportTemplate.ColSettingsJSON = JSON.stringify(object);

    const templateData = this.UpdatedReportTemplate;

    if (templateData) {
      this.apiService.updateReportTemplate(templateData)
        .subscribe(
          response => {
            this.dialogRef.close();
            console.log('Update Successful:', response);
          },

          error => {
            this.dialogRef.close();
            console.log('Update Failed:', error);
          }
        );
    }


  }


  AddReportTemplate() {

    const object = {};
    for (let [key, value] of this.ColSetting) {
      object[key.toString()] = value;
    }

    this.UpdatedReportTemplate.ColSettingsJSON = JSON.stringify(object);




    if (this.UpdatedReportTemplate) {
      this.apiService.AddReportTemplate(this.UpdatedReportTemplate).subscribe(
        response => {
          console.log('Update Successful:', response);
          // this.templateAdded.emit(templateData);

        },

        error => {
          console.log('Update Failed:', error);
        }
      );
    }


    this.dialogRef.close();

  }


  UpdateTemplateType(event: any) {
    const selectedTemplateValue = event.target.value;
    if (selectedTemplateValue) {
      this.UpdatedReportTemplate.TemplateType = selectedTemplateValue;

      console.log('Updated Template Type:', this.UpdatedReportTemplate);
    }
  }

  Show() {
    console.log(this.ColSetting);
  }


  SelectAll(event: any) {
    const isChecked = event.target.checked;
    this.ColSetting.forEach(item => {
      item[1] = isChecked;
    });
  }


}
