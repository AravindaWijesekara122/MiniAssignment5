import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable, inject } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  constructor(private auth : AuthService, private router: Router, private toast: NgToastService){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true
    }else{
      this.toast.error({detail:"ERROR", summary:"Please Login First!"});
      this.router.navigate(['organizer-login'])
      return false;
    }
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};