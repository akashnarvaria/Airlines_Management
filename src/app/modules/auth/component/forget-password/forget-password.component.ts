import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
error=null;
success=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  forgetPasswordSubmit(form:NgForm){
    this.authService.forgetPassword(form.value.email).subscribe(res=>{
      console.log(res);
      this.success=true;
    },err=>{
      this.error=err;
    });
  }
}
