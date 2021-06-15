import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardStaff implements CanActivate{

  constructor(private authService:AuthService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,
    router:RouterStateSnapshot
    ):boolean|Promise<boolean>|Observable<boolean | UrlTree>{
      let role:string=null;
      this.authService.role.pipe(take(1)).subscribe(data=>{
        role=data;
      });
    return this.authService.user.pipe(take(1),map(user=>{
     
     // const role=this.authService.role;
      
      if(!!user && role=="staff"){
        return true;
      }
      return this.router.createUrlTree(['/auth']);
    }));
  }
  
}
