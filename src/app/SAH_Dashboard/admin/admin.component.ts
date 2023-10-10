import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({ 
      CoName: new FormControl(''), 
      CoEmail: new FormControl(''), 
      CoGSTNO: new FormControl(''), 
      CoGSTCode: new FormControl(''),
      CoMobile: new FormControl(''), 
      CoWebsite: new FormControl(''),
      CoPan: new FormControl(''), 
      CoTIN: new FormControl(''), 
      CoVAT: new FormControl(''), 
      CoAddressPinCode: new FormControl(''), 
      CoAddressState: new FormControl(''),
      CoAddressCity: new FormControl(''),
      CoAddress1: new FormControl(''),
      CoAddress2: new FormControl(''),
      CoBankName: new FormControl(''),
      CoBankAddress: new FormControl(''), 
      CoBankIFSC: new FormControl(''),
      CoBankAccountNumber: new FormControl(''), 
      CoPersonName: new FormControl(''), 
      CoPersonNumber: new FormControl(''), }); 
  }
  Insert_CO(){
    
  }
}
