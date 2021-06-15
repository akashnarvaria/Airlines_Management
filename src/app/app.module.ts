import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './modules/auth/service/auth-interceptor.service';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './modules/auth/service/auth.service';
import { AuthGuardStaff } from './modules/auth/service/auth.guard.staff';
import { AuthGuardAuth } from './modules/auth/service/auth.guard.auth';
import { CommonService } from './shared/service/common.service';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '504959076356-agk4t8p5hgurmgdb6o5ptstcs4o1eckv.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  },{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},AuthService,AuthGuardStaff,AuthGuardAuth,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
