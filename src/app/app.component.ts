import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './modules/auth/service/auth.service';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './modules/auth/store/auth.actions'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private authService:AuthService, private store:Store<fromApp.AppState>){}
ngOnInit(){
  //this.authService.autoLogin();
      this.store.dispatch(new AuthActions.AutoLogin());
  
}

}
 

