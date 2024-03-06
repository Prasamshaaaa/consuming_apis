import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { LabTest, LabTestResult } from '../model/lab-test.model';

@Component({
  selector: 'app-lab-tests-data-list',
  templateUrl: './lab-tests-data-list.component.html',
  styleUrls: ['./lab-tests-data-list.component.css']
})
export class LabTestsDataListComponent implements OnInit {
  labTests: LabTest[] = [];
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    //Setting the token in local storage 
  
    // Retrieving the token from local storage
  
    // Making a request to the API endpoint with the token
    this.apiService.getLabTestData().subscribe(
      (data: LabTestResult) => {
        if (data && data.Results) {
          this.labTests = data.Results;
          
          // Store the data in local storage
          localStorage.setItem('labTestsData', JSON.stringify(this.labTests));
        }
      },
      (error) => {
        console.error('Error fetching the data:', error);
      }
    );
  }
}
