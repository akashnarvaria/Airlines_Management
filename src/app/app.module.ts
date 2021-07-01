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
import { MatSliderModule } from '@angular/material/slider';
import { MyMaterialModule } from  './material/material.module';
import {MatTableModule} from '@angular/material/table';


import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/auth/store/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    SharedModule,
    MatSliderModule,
    MyMaterialModule,
    MatTableModule
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({logOnly:environment.production})
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
