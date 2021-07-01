import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import * as AuthActions from '../../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
  }
}
