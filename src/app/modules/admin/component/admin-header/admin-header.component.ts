import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/service/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.logout();
  }
}
