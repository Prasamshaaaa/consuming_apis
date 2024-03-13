import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../model/login';
import { ApiServiceService } from '../api-service.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedIn: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiServiceService, private authService: AuthService, private route: Router) {
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
          const token = response.loginJwtToken;

          // Use AuthService to handle login and store the token
          this.authService.login(token);

          this.route.navigateByUrl('home');

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

  HandleEnterEvent(id: string): void {
    if (id) {
      const elem = document.getElementById(id);
      if (elem) {
        elem.focus();
      }
    }
  }

}
