import { Component } from '@angular/core';
import { ServiceService } from './containers/service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem = [
    ["m1","m2"],
    ["m3","m4"]
  ];
 
  cardTypeSimple="contact_card";
  cardTypeFlip="contact_card_flip";
  cartTypeUserProfileCard="cartTypeUserProfileCard";

  constructor(private getCommonMethod: ServiceService){
  
    
  }


}
