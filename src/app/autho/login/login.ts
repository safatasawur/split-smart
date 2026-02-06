import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService as LoginService } from '../../myservices/auth-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router:Router){}
email=''
password=''
loginservice=inject(LoginService)

login(){
  
this.loginservice.loginuser(this.email,this.password)
this.router.navigate(['/dashboard'])
}
}
