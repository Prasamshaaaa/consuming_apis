import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LoginRequest } from './model/login';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './shared-kernel/api-response';
import { LabTest } from './model/lab-test.model';
import { LabSpecimenData } from './model/lab-specimens';
import { PriceCategory, Schemes, BillingCreditOrganizations } from './model/billingmaster';
import { ReportTemplates } from './model/lab-test.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // For LabSpecimens
  public options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })  // Commonly used when submitting HTML form data to a server.
  };

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });  // indicates that the content being sent or received is in JSON 
  baseUrl: any;

  constructor(private http: HttpClient) { }


  getLoginJwtToken(loginData: LoginRequest): Observable<any> {
    const url = `${environment.baseUrl}Account/GetLoginJwtToken`;
    return this.http.post(url, loginData, { headers: this.headers });
  }

  // Method to make a request to the API endpoint with the token
  getLabTestData(): Observable<ApiResponse<LabTest[]>> {
    const url = `${environment.baseUrl}LabSetting/LabTests`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // sends an HTTP GET request to the specified URL (url) with custom headers (headers)

    return this.http.get<ApiResponse<LabTest[]>>(url, { headers });
  }

  // For Post LabSpecimens
  postLabSpecimensData(specimen: string): Observable<ApiResponse<any>> {
    const url = `${environment.baseUrl}LabSetting/LabSpecimen`;
    return this.http.post<ApiResponse<any>>(url, specimen, this.options);
  }

  getLabSpecimensData(): Observable<ApiResponse<Array<LabSpecimenData>>> {
    const url = `${environment.baseUrl}Lab/LabSpecimens`;


    // sends an HTTP GET request to the specified URL (url) with custom headers (headers)

    return this.http.get<ApiResponse<Array<LabSpecimenData>>>(url, this.options);
  }

  getBillingSchemes(serviceBillingContext: string): Observable<ApiResponse<Schemes[]>> {
    const url = `${environment.baseUrl}BillingMaster/Schemes`;

    // Create HTTP parameters with the serviceBillingContext query parameter
    const params = new HttpParams().set('serviceBillingContext', serviceBillingContext);

    return this.http.get<ApiResponse<Schemes[]>>(url, { headers: this.headers, params });
  }

  getPriceCategories(): Observable<ApiResponse<PriceCategory[]>> {
    const url = `${environment.baseUrl}BillingMaster/PriceCategories`;

    return this.http.get<ApiResponse<PriceCategory[]>>(url, { headers: this.headers });
  }

  getBillingCreditOrganizations(): Observable<ApiResponse<BillingCreditOrganizations[]>> {
    const url = `${environment.baseUrl}Billing/BillingCreditOrganizations`;

    return this.http.get<ApiResponse<BillingCreditOrganizations[]>>(url, { headers: this.headers });

  }

  getReportTemplates(): Observable<ApiResponse<ReportTemplates>> {
    const url = `${environment.baseUrl}LabSetting/ReportTemplates`;
    return this.http.get<ApiResponse<ReportTemplates>>(url, { headers: this.headers });
  }

  getLabLookUpList(): Observable<any> {
    const url = `${environment.baseUrl}LabSetting/LabLookupList`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  getLabTestComponents(): Observable<any> {
    const url = `${environment.baseUrl}LabSetting/LabTestComponents`;
    return this.http.get<any>(url, this.options);
  }

  getLabCategories(): Observable<any> {
    const url = `${environment.baseUrl}Lab/LabCategories`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  updateLabTest(data): Observable<any> {
    const finalData = JSON.stringify(data);
    const url = `${environment.baseUrl}LabSetting/LabTest`;
    return this.http.put<any>(url, finalData, this.options);
  }



}


