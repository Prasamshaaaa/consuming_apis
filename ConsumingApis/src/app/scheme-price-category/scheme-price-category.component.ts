import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheme-price-category',
  templateUrl: './scheme-price-category.component.html',
  styleUrls: ['./scheme-price-category.component.css']
})
export class SchemePriceCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}

abstract class Utils {

  public static pi: number = 3.14;

  public static calculate(radius: number): number {
    return this.pi * radius;
  }

}

console.log(Utils.pi);
console.log(Utils.calculate(2));
