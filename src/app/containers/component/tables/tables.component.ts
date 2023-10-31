import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit{
  
 @Input() msgToChild:any
   tableKey:any=[]
   tableValue:any=[]
   ngOnInit() {
    this.msgToChild.forEach((ele:any)=>{
    
      this.tableKey = Object.keys(ele)
      this.tableValue.push(Object.values(ele));
      
     })
  }
 
  constructor(){ 
  
   
  }

  
}
