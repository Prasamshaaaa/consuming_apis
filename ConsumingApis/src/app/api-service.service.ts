import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from './model/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getLoginJwtToken(loginData: LoginRequest): Observable<any> {
    const url = `${environment.baseUrl}Account/GetLoginJwtToken`;
    return this.http.post(url, loginData, { headers: this.headers });
  }

  // Method to make a request to the API endpoint with the token
  getLabTestData(): Observable<any> {
    const url = `${environment.baseUrl}Lab/LabTests`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    // sends an HTTP GET request to the specified URL (url) with custom headers (headers)

    return this.http.get(url, { headers });

  }

}
