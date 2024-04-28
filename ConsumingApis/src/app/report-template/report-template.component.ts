import { Component, OnInit, Output } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ReportTemplate } from '../model/lab-test.model';
import { ApiResponse } from '../shared-kernel/api-response';
import { ENUM_APIResponseStatus, ENUM_LocaStorageKeys } from '../shared-kernel/shared-enums';
import { MatDialog } from '@angular/material';
import { UpdateReportTemplateComponent } from '../update-report-template/update-report-template.component';

@Component({
  selector: 'app-report-template',
  templateUrl: './report-template.component.html',
  styleUrls: ['./report-template.component.css']
})
export class ReportTemplateComponent implements OnInit {

  reportTemplate: ReportTemplate[] = [];

  // ReceivedAddedTemplate: ReportTemplate;

  //Variable to store the search term
  searchQuery: string = '';

  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }
  EditReportTemplateData(template: ReportTemplate) {
    this.openDialog(template, true);
  }

  AddReportTemplateData(data: ReportTemplate) {
    this.openDialog(null, false);

    // this.reportTemplate.push(data);

  }

  openDialog(template: ReportTemplate | null, isEditMode: boolean): void {
    const dialogREf = this.dialog.open(UpdateReportTemplateComponent,
      {
        width: '95%',
        height: '90%',
        data: {
          reporttemplate: template  // passing the entire object to the UpdateReportTemplateComponent
          // isEditMode: isEditMode    ....yesari ni pathauna milxa



        }
      }
    );

    dialogREf.afterClosed().subscribe((addedTemplate: ReportTemplate) => {

      if (addedTemplate) {
        this.reportTemplate.push(addedTemplate);
      }
    });
    dialogREf.componentInstance.isEditMode = isEditMode; // Passing edit mode information to the dialog
  }

  ngOnInit() {
    this.apiService.getReportTemplateData().subscribe(
      (res: ApiResponse<ReportTemplate[]>) => {
        if (res && res.Status === ENUM_APIResponseStatus.Success) {
          if (res.Results) {
            this.reportTemplate = res.Results;
            localStorage.setItem(ENUM_LocaStorageKeys.reportTemplate, JSON.stringify(this.reportTemplate));
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



    // this.apiService.AddReportTemplate(data).subscribe(
    //   (res: ApiResponse<ReportTemplate[]>) => {
    //     if (res && res.Status === ENUM_APIResponseStatus.Success) {
    //       if (res.results) {
    //         this.reportTemplate.push(res.results);
    //       } else {
    //         console.info('There is no Report Template Data Available');
    //       }
    //     } else {
    //       console.info('Error fetching the data', res);
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching the data:', error);
    //   }
    // );



  }

  DeactivateReportTemplate(template) {

  }

  FilterTemplates() {
    const searchTerm = this.searchQuery.toLowerCase();
    return this.reportTemplate.filter(template =>
      template.ReportTemplateShortName.toLowerCase().includes(searchTerm)
    )
  }

  printTable() {
    let printContents = document.getElementById('table-container').innerHTML;
    let originalContents = document.body.innerHTML;    //......This is done to restore the original content after printing.


    // Open a new window
    let printWindow = window.open();

    printWindow.document.write(`
    <html>
        <head>

            <title>Table Print</title>
            <link rel="stylesheet" type ='text/css' href="../../../../test.css">
            <style>


            .example-viewport {
              height: 1000px;
              /* Set the desired height of the virtual scroll viewport */
              overflow: auto;
          }
          
          table {
              width: 100%;
              border-collapse: collapse;
          }
          
          /* Style the table header */
          thead {
              background-color: #f2f2f2;
          }
          
          /* Style the table header cells */
          th {
              padding: 12px;
              text-align: left;
              border-bottom: 1px solid #ddd;
              border-left: 1px solid #ddd;
              border-right: 1px solid #ddd;
              border-top: 1px solid #ddd;

              
          }
          
          /* Style the table body rows */
          tbody tr:nth-child(even) {
              background-color: #f2f2f2;
          }
          
          /* Style the table body cells */
          td {
              padding: 12px;
              border-bottom: 1px solid #ddd;
              border-left: 1px solid #ddd;
              border-right: 1px solid #ddd;

          }


            </style>
        </head>
        <body onload="window.print();">${printContents}</body>
    </html>
`

    );

    printWindow.document.close();

    //Restore the original contents
    document.body.innerHTML = originalContents;

  }


}
