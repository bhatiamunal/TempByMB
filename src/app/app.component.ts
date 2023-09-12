import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TempByMB';
  currentItem = [
    ["m1","m2"],
    ["m3","m4"]
  ];
  cardTypeSimple="contact_card";
  cardTypeFlip="contact_card_flip";
  cartTypeUserProfileCard="cartTypeUserProfileCard";
  nav1 =['nav','nav-black']
  nav2 =['nav','nav-red']
  nav3 =['nav','nav-white']
  nav4 = ['nav-btn','close-btn']
  constructor(){
    
  }
  HideShow(s1:any){
    if(s1==1){
      this.nav1.push('visible')
      this.nav2.push('visible')
      this.nav3.push('visible')

    }
    else {
      this.nav1.pop()
      this.nav2.pop()
      this.nav3.pop()

    }
    
  }

}
