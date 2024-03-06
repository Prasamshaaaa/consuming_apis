import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems, ThisIsAClassThatGivesMenuItems } from './model/menu-items';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PROJECT';
  menuItems = new Array<MenuItems>();


  constructor(private router: Router){
    this.generatemenuitems();

  }

  ngOnInit() {

   
  }

  generatemenuitems() {
    const menuItems = ThisIsAClassThatGivesMenuItems.getMenuItems();
    this.menuItems = menuItems.sort((a,b) => a.displayOrder - b.displayOrder);


  }
}
