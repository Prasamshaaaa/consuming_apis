import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private authToken: string | null = null;
  constructor() { }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    // trim garyo vane white space hatxa
    this.loggedIn = (token && token.trim())? true : false;
    return this.loggedIn;
  }

  // Method to set the user as logged in
  login(token: string) {
    this.loggedIn = true;
    this.authToken = token;
    localStorage.setItem('token', token);

  }

  // Method to set the user as logged out
  logout() {

    this.loggedIn = false;
    this.authToken = null
    localStorage.removeItem('token');

  }


}
