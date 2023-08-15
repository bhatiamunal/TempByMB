import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TempByMB';
  // cssVar: string = 'primary big';
  // cssArray = ['primary', 'big'];
  Accordion_Heading_MB = {accordion: true,};
  Accordion_Padding_MB={
    panel: true,
  }
  Data_Accordian:any
  constructor(){
    let data=[
      {heading:"This is heading 1 ",descbtion:"this is describtion 1"},
      {heading:"This is heading 2 ",descbtion:"this is describtion 2"}
    ];
    
     this.fillData(data);
  }
   fillData(data:any)  {
   let Data_Accordian_inner:any[]=[];
    data.forEach((element:any,index :any) => {
      Data_Accordian_inner.push(
        { id:index+1, pannelHeading: element.heading, pannelDesc: element.descbtion, Accordion_Heading_View_MB: {accordion: true,}, Accordion_Pannel_View_MB: {panel: true,}},
        )
    });
    this.Data_Accordian = Data_Accordian_inner;
  
  }
  ShowHide(id:any){
    debugger
    this.Data_Accordian.map((ele:any)=>{
      if(id==ele.id){
        ele.Accordion_Pannel_View_MB.panel=!ele.Accordion_Pannel_View_MB.panel
      }
      return ele;
    });


  }
}
