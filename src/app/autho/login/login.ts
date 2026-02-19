import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService as LoginService } from '../../myservices/auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZone } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule,CommonModule],
  
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router:Router,private cdr:ChangeDetectorRef ){}
email=''
password=''
message=''
loginservice=inject(LoginService)

async login(){
  this.message=''
  try{
    await this.loginservice.loginuser(this.email,this.password)
this.router.navigate(['/dashboard'])
  }catch(err){

    console.log("Login error:", err)
   
    this.message='Ouch! Please try again.'
    console.log(this.message)
    this.cdr.detectChanges()
    
    
  }

}
}
