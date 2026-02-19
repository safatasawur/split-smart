import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService as RegService } from '../../myservices/auth-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup  {
  constructor(private router:Router){}
regservice = inject(RegService)
email=''
password=''
name =''
async register(){

  try {
    await this.regservice.createuser(
      this.email,
      this.password,
      this.name
    );

    await this.regservice.verifyuser();

    await this.router.navigate(['/verifypage']);

  } catch (error) {
    console.error('Signup failed:', error);
  }


  
  
}

  


}
