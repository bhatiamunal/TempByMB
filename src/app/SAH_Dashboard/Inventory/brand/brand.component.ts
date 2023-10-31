import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  obj = [ { 0: "a", 1: "b", 2: "c" }, { 0: "e", 1: "f", 2: "g" } ]; 
  constructor(){

  }

}
