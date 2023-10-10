import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup(
      { 
        PName: new FormControl(''), 
        BrandName: new FormControl(''), 
        Catagories: new FormControl(''), 
        Describtion: new FormControl(''), 
        UniqID: new FormControl(''), 
        MRP: new FormControl(''), 
        SP: new FormControl(''), 
        CP: new FormControl(''), 
        HSN: new FormControl(''), 
        CGST: new FormControl(''), 
        SGST: new FormControl('') 
      }
      );
  }
  Insert_CO(){
    
  }
}
