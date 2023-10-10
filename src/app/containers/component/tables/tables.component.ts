import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  obj = [ { 0: "a", 1: "b", 2: "c" }, { 0: "e", 1: "f", 2: "g" } ]; 
 
   tableKey:any=[]
   tableValue:any=[]
  constructor(){ 
  
   this.obj.forEach((ele:any)=>{
    console.log(ele)
    this.tableKey = Object.keys(ele)
    this.tableValue.push(Object.values(ele));
    
   })
  }

  
}
