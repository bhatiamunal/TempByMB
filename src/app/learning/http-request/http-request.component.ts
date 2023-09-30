import { Component } from '@angular/core';
import {ServiceService} from './../service.service'
@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HTTPRequestComponent {
  data:any;
  constructor(private service: ServiceService){
     this.data  = service.getData();
    console.log(this.data);
  }
}
