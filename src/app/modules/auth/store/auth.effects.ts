import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { User } from "../model/user.model";
import { AuthService } from "../service/auth.service";
import * as AuthActions from './auth.actions';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


const handleAuthentication = (expiresIn: number, email: string, userId: string, token: string,role:string) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  const user = new User(email, userId, token, expirationDate);
  localStorage.setItem('userData', JSON.stringify(user));
  return new AuthActions.Login({
    email: email,
    userId: userId,
    token: token,
    expirationDate: expirationDate,
    role:role
  });
}

const handleError = (errorRes: any) => {
  let errorMessage = "An unknown error occured!";
  if (!errorRes.error || !errorRes.error.error) {
    return of(new AuthActions.LoginFail(errorMessage));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email already exist.';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exist';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'The password is incorrect';
      break;
    case 'MISSING_EMAIL':
      errorMessage = 'The email does not exist';
      break;
  }
  return of(new AuthActions.LoginFail(errorMessage));
}

@Injectable()
export class AuthEffects {

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {  
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCIZsIF3etNReFdcphEOKK57jAXFXoB2p8', {
        email: authData.payload.email,
        password: authData.payload.password,
        returnSecureToken: true
      }).pipe(
        tap(resData => {
          this.authService.autoLogout(+resData.expiresIn * 1000);
          
        }),
        map(resData => {
          return handleAuthentication(
            +resData.expiresIn, 
            resData.email, 
            resData.localId, 
            resData.idToken,
            authData.payload.role
            );
        }),
        // map(()=>{
        //   if(authData.payload.role=='staff'){
        //     this.router.navigate(['/staff']);
        //   }
          
        //   if(authData.payload.role=='admin'){
        //     this.router.navigate(['/admin']);
        //   }
        // }),
        catchError(errorRes => {
          return handleError(errorRes);
        })
        );
      
    })
  );

  @Effect()
  userRole=this.actions$.pipe(
    ofType(AuthActions.USER_ROLE),
    switchMap((authData:AuthActions.UserRole)=>{
      return this.httpClient.get('https://airlines-d4a3f-default-rtdb.firebaseio.com/userRoles.json')
      .pipe(map(data=>{
            let userData=JSON.parse(JSON.stringify(data));
          
          let roleMatch=false;
        for(let i=0;i<userData.length;i++){
          //console.log(userData[i].email+" "+userData[i].role);
          //console.log(authData.payload.email+' '+userData[i].email+''+userData[i].role);
          if(authData.payload.email===userData[i].email && userData[i].role===authData.payload.role){
            //this.authService.role.next(role);
            localStorage.setItem('role',JSON.stringify(authData.payload.role));
            console.log(JSON.parse(localStorage.getItem('role')));
            i=userData.length;
            roleMatch=true;
            //this.isLoading=false;
          }
        }
        if(roleMatch){
          return new AuthActions.LoginStart({
            email:authData.payload.email,
            password:authData.payload.password,
            role:authData.payload.role});
        }
        return new AuthActions.LoginFail('Email does not exist!!');
      }));
      // console.log("AKASH");
      // return this.httpClient.get('https://airlines-d4a3f-default-rtdb.firebaseio.com/userRoles.json')
      // .pipe(
      //   map(data=>{
      //     console.log('Akash');
      //     let userData=JSON.parse(JSON.stringify(data));
          
      //     let roleMatch=false;
      //   for(let i=0;i<userData.length;i++){
      //     //console.log(userData[i].email+" "+userData[i].role);
      //     //console.log(authData.payload.email+' '+userData[i].email+''+userData[i].role);
      //     if(authData.payload.email===userData[i].email && userData[i].role===authData.payload.role){
      //       //this.authService.role.next(role);
      //       localStorage.setItem('role',JSON.stringify(authData.payload.role));
      //       console.log(JSON.parse(localStorage.getItem('role')));
      //       i=userData.length;
      //       roleMatch=true;
      //       //this.isLoading=false;
      //     }
      //   }
        
        
      // }),catchError(errorRes=>{
      //   return handleError(errorRes);
      // })
      // );
    })
  );
  

  @Effect({ dispatch: false })
  authRedirect = this.actions$.pipe(ofType(AuthActions.LOGIN), tap((authData:AuthActions.Login) => {
    
    if (authData.payload.role == 'staff') {
      this.router.navigate(['/staff']);
    }

    if (authData.payload.role == 'admin') {
      this.router.navigate(['/admin']);
    }
  }));

  @Effect()
  autoLogin = this.actions$.pipe(
    ofType(AuthActions.AUTO_LOGIN),
    map(() => {
      const userData: {
        email: string;
        id: string;
        _token: string;
        _tokenExpirationDate: string;
      } = JSON.parse(localStorage.getItem('userData'));
      const role:string=JSON.parse(localStorage.getItem('role'));
      if (!userData) {
        return { type: 'DUMMY' };
      }
      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate));

      if (loadedUser.token) {
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.authService.autoLogout(expirationDuration);
        return new AuthActions.Login({
          email: loadedUser.email,
          userId: loadedUser.id,
          token: loadedUser.token,
          expirationDate: new Date(userData._tokenExpirationDate),
          role:role
        });

      }
      return { type: 'DUMMY' };
    })
  )

  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      this.authService.clearLogoutTimer();
      localStorage.removeItem('userData');
      localStorage.removeItem('role');
      this.router.navigate(['/auth']);
    }))

  constructor(private actions$: Actions,
    private httpClient: HttpClient,
    private router: Router,
    private authService: AuthService) { }
}