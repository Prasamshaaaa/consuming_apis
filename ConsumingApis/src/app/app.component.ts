import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems, ThisIsAClassThatGivesMenuItems } from './model/menu-items';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PROJECT';
  //menuItems = new Array<MenuItems>();


  constructor(private router: Router, private authService: AuthService){
    //this.generatemenuitems();

  }

  ngOnInit() {

   
  }

/*   generatemenuitems() {
    const menuItems = ThisIsAClassThatGivesMenuItems.getMenuItems();
    this.menuItems = menuItems.sort((a,b) => a.displayOrder - b.displayOrder);


  } */

/*   isLoggedIn(): boolean {

    let result = this.authService.isLoggedIn();
    return result;
   }
 
   // Method to handle login and save the token
 handleLogin(token: string){
   this.authService.login(token);
 }
 
   // Method to handle logout and remove the token
 handleLogout(){
   this.authService.logout();
 
       // After logout, navigate to the login view
 this.router.navigateByUrl('');
 setTimeout(() => {
   window.location.reload();
 }, 100);
 
 } */


}
