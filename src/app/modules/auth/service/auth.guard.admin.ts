import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
    let role: string = null;
    // this.authService.role.pipe(take(1)).subscribe(data => {
    //   role = data;
    // });
    return this.store.select('auth').pipe(
      take(1),
      map(authState=>{
        role=authState.role;
        return authState.user;
      }),
      map(user => {
        if (!!user && role == "admin") {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      }));
  }

}
