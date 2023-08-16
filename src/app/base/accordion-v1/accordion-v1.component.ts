import { Component,Input,OnInit  } from '@angular/core';

@Component({
  selector: 'app-accordion-v1',
  templateUrl: './accordion-v1.component.html',
  styleUrls: ['./accordion-v1.component.css']
})
export class AccordionV1Component  implements OnInit{
  Data_Accordian:any
  @Input() item:any ;
  constructor(){
    
    // let data=[
    //   {heading:"This is heading 1 ",descbtion:"this is describtion 1"},
    //   {heading:"This is heading 2 ",descbtion:"this is describtion 2"}
    // ];
    
    
  }
  ngOnInit() {
    this.fillData();
  }
  async fillData()  {
    
    let Data_Accordian_inner:any[]=[];
    this.item.forEach((element:any,index :any) => {
       Data_Accordian_inner.push(
         { id:index+1, pannelHeading: element[0], pannelDesc: element[1], Accordion_Heading_View_MB: {accordion: true,}, Accordion_Pannel_View_MB: {panel: true,}},
         )
     });
     this.Data_Accordian = Data_Accordian_inner;
   
   }
   ShowHide(id:any){
     
     this.Data_Accordian.map((ele:any)=>{
       if(id==ele.id){
         ele.Accordion_Pannel_View_MB.panel=!ele.Accordion_Pannel_View_MB.panel
       }
       return ele;
     });
 
 
   }
}
