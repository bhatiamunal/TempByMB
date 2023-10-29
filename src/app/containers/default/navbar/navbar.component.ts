import { Component } from '@angular/core';
import { ServiceService} from './../../service.service'
import { Router } from '@angular/router';
import { nav_data } from '../../_nav'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nav1 =['nav','nav-black']
  nav2 =['nav','nav-red']
  nav3 =['nav','nav-white']
  nav4 = ['nav-btn']
   nav_data:any;
  constructor(getService:ServiceService,private router: Router){
    this.nav_data =nav_data
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
  navigationLink(data:any){
    debugger
    this.router.navigate([data]);
    this.HideShow(2)
  }
  ViewSubMenu(id:any){
   
    this.nav_data.map((ele:any)=>{
      let data = ele;
      if(ele.id==id){
        data.visibilty=!data.visibilty
      }
      return data
    })
    console.log(this.nav_data)

  }
}
