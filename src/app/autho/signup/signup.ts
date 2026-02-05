import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService as RegService } from '../../myservices/auth-service';
@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup  {
regservice = inject(RegService)
email=''
password=''
register(){
  this.regservice.createuser(this.email,this.password)
  console.log("email:", this.email)
  console.log("password:",this.password)
}
 
  


}
