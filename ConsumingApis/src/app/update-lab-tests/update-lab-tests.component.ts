import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { forkJoin } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { LabTest, LabTestComponentMap, LabTestComponentsData, RootObject, LabTestComponentsJSON } from '../model/lab-test.model';
import { ENUM_APIResponseStatus } from '../shared-kernel/shared-enums';


@Component({
  selector: 'app-update-lab-tests',
  templateUrl: './update-lab-tests.component.html',
  styleUrls: ['./update-lab-tests.component.css']
})
export class UpdateLabTestsComponent implements OnInit {

  SelectedComponent: LabTestComponentMap;
  LabTestComponents: LabTestComponentsData[];

  UpdateTest: RootObject = new RootObject();


  SelectedReportTemplate: any;
  SelectedLabCategories: any;

  // SelectedTemplateType: any;

  SelectedLabSpecimen: any;
  labTest: LabTest;

  labTestName: string;
  labTestCode: string;
  reportTemplatesData: any;
  labLookUpListData: any;
  labTestComponentsData: LabTestComponentsJSON[];
  labCategoriesData: any;
  labSpecimensData: any;
  ComponentMapList: LabTestComponentMap[];
  MappedComponent: Array<LabTestComponentsJSON> = new Array<LabTestComponentsJSON>();


  constructor(
    public dialogRef: MatDialogRef<UpdateLabTestsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiServiceService
  ) {
    this.loadLabMasterData();
    this.UpdateTest = data.labTest;

  }

  ngOnInit(): void {


  }

  public Specimens = new Array<string>();   // creates a public array of string named "Specimens" 

  loadLabMasterData() {
    forkJoin([
      this.apiService.getReportTemplates(),
      this.apiService.getLabLookUpList(),
      this.apiService.getLabTestComponents(),
      this.apiService.getLabCategories(),
      this.apiService.getLabSpecimensData()
    ]).subscribe(
      ([reportTemplates, labLookUpList, labTestComponents, labCategories, labSpecimens]) => {

        if (reportTemplates && reportTemplates.Status === ENUM_APIResponseStatus.Success) {
          this.reportTemplatesData = reportTemplates.Results;
          this.SelectedReportTemplate = this.reportTemplatesData.find(r => r.ReportTemplateID === this.UpdateTest.ReportTemplateId);
        }

        if (labLookUpList && labLookUpList.Status === ENUM_APIResponseStatus.Success) {

          this.labLookUpListData = labLookUpList.Results;
        }

        if (labTestComponents && labTestComponents.Status === ENUM_APIResponseStatus.Success) {

          this.labTestComponentsData = labTestComponents.Results;
          this.UpdateTest.LabTestComponentMap.forEach((map, index) => {
            const selectedComponent = this.labTestComponentsData.find(r => r.ComponentId === map.ComponentId);
            if (selectedComponent) {
              this.MappedComponent[index] = selectedComponent;
            }
          });


        }

        if (labCategories && labCategories.Status === ENUM_APIResponseStatus.Success) {

          this.labCategoriesData = labCategories.Results;
          this.SelectedLabCategories = this.labCategoriesData.find(r => r.TestCategoryId === this.UpdateTest.LabTestCategoryId);
        }


        if (labSpecimens && labSpecimens.Status === ENUM_APIResponseStatus.Success) {

          this.labSpecimensData = labSpecimens.Results;
          if (this.UpdateTest.LabTestSpecimen) {
            const specimens = JSON.parse(this.UpdateTest.LabTestSpecimen);  //string of array lai array ma convert gareko
            this.Specimens = specimens;
          }
          this.SelectedLabSpecimen = this.labSpecimensData.find(r => r.Name === this.UpdateTest.LabTestSpecimen);
          // if (selectedLabSpecimens) {
          //   this.SelectedLabSpecimen = selectedLabSpecimens.Name;
          // }
        }

        console.log('Report Templates:', this.reportTemplatesData);
        console.log('Lab LookUp List:', this.labLookUpListData);
        console.log('Lab Test Components:', this.labTestComponentsData);
        console.log('Lab Categories:', this.labCategoriesData);
        console.log('Lab Specimens:', this.labSpecimensData);
      },
      (error) => {
        console.error('Error fetching data from APIs:', error);
      }
    );
  }

  updateLabTest() {


    const testData = this.UpdateTest;
    testData.CreatedBy = 1;
    testData.CreatedOn = new Date().toString();
    testData.LabReportTemplateModel = null;
    testData.ModifiedOn = null;
    testData.ModifiedBy = null;
    if (testData) {
      this.apiService.updateLabTest(testData).subscribe(
        response => {
          console.log('Update Successful:', response);
        },

        error => {
          console.error('Update failed:', error);
        }
      );
    }


    this.dialogRef.close();
  }

  closePopup() {
    this.dialogRef.close();
  }

  addRow(index: number) {

    let newIndex = index + 1;
    let compoentMapData = new LabTestComponentsJSON();  //  creates a new instance of LabTestComponentsData
    compoentMapData = new LabTestComponentsJSON();
    compoentMapData.ComponentName = "";   //Initialization
    compoentMapData.Unit = "";
    compoentMapData.ValueType = "";
    compoentMapData.Range = "";
    compoentMapData.DisplaySequence = 0;
    compoentMapData.IndentationCount = 0;
    compoentMapData.ValueLookup = "";

    this.MappedComponent.push(compoentMapData); //  adds the newly created compoentMapData object to the MappedComponent

    let componentMap = new LabTestComponentMap(); // creates a new instance of LabTestComponentMap

    this.UpdateTest.LabTestComponentMap.push(componentMap); //It pushes the newly created componentMap object into the LabTestComponentMap array, 
  }


  UpdateLabCategory() {
    if (this.SelectedLabCategories) {
      this.UpdateTest.LabTestCategoryId = this.SelectedLabCategories.TestCategoryId;
      this.UpdateTest.LabTestCategory = this.SelectedLabCategories.TestCategoryName;

      console.log('Updated Category Value:', this.UpdateTest);
    }
  }

  UpdateReportTemplateName() {
    if (this.SelectedReportTemplate) {
      this.UpdateTest.ReportTemplateId = this.SelectedReportTemplate.ReportTemplateID;
      this.UpdateTest.ReportTemplateName = this.SelectedReportTemplate.ReportTemplateName;

      console.log('Updated Report Template Value:', this.UpdateTest);
    }


  }


  UpdateSpecimens() {
    if (this.SelectedLabSpecimen) {
      const specimen = this.SelectedLabSpecimen.Name;
      this.Specimens.push(specimen);
      this.UpdateTest.LabTestSpecimen = JSON.stringify(this.Specimens); //UpdateTest.LabTestSpecimen ma value update garna string ma convert gareko as it's structure is of string of array 

    }

    console.log('Updated Lab Specimen:', this.UpdateTest)


  }

  onComponentNameChange(event: Event, index: number) {
    const selectedComponent = this.MappedComponent[index];
    if (selectedComponent) {
      this.UpdateTest.LabTestComponentMap[index].ComponentId = selectedComponent.ComponentId;
      this.UpdateTest.LabTestComponentMap[index].DisplaySequence = selectedComponent.DisplaySequence;
      //this.UpdateTest.LabTestComponentMap[index].IndentationCount = selectedComponent.IndentationCount;
      this.UpdateTest.LabTestComponentMap[index].LabTestComponent = this.MappedComponent[index];
    }

  }

  UpdateTemplateType(event: any) {
    const selectedTemplateValue = event.target.value;
    if (selectedTemplateValue) {
      this.UpdateTest.TemplateType = selectedTemplateValue;

      console.log('Updated Template Type:', this.UpdateTest);
    }
  }


}

