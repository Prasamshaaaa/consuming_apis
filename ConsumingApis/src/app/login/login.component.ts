import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../model/login';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedIn: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiServiceService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData: LoginRequest = new LoginRequest();
      loginData.UserName = this.loginForm.value.username;
      loginData.Password = this.loginForm.value.password;
      
      // Call the API service to get the JWT token
      this.apiService.getLoginJwtToken(loginData).subscribe(
        (response) => {
          const token = response.token;

          // Store the token in local storage for subsequent requests
          localStorage.setItem('token', token);

          this.isLoggedIn = true;
        },
        (error) => {
          console.error('Login failed:', error);
          this.errorMessage = 'Invalid username or password. Please try again.';
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit() {

  }
}
