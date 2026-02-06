import { Component } from '@angular/core';
import { AuthService } from '../../myservices/auth-service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  standalone: true
})
export class Profile {
  constructor(private router:Router){}
   authservice = inject(AuthService)

   logout(){
    this.authservice.logout()
    this.router.navigate(['/login'])
   }
}
