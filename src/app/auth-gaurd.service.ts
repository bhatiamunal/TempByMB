import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(
    private router: Router,
 
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    // if (user) {
    //     // authorised so return true
    //     return true;
    // }

    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
    return true;
}
}
