import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  obj = [ { c0: "a", c1: "b", c2: "c" }, { c0: "e", c1: "f", c2: "g" } ]; 
   //KeyArr:String[]
   access:any
  constructor(){ 
    //this.KeyArr = Object.keys(this.obj[0]); 
   
    // this.access = (str: keyof typeof this.obj) => {
    //   //console.log(this.obj[str])
    //   return this.obj[str];
    // };
  }
  getHeaders() {
    let headers: string[] = [];
    if(this.obj) {
      this.obj.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }
  
}
