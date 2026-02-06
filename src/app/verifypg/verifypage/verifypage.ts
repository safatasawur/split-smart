import { Component, inject } from '@angular/core';
import { AuthService } from '../../myservices/auth-service';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifypage',
  imports: [RouterLink],
  templateUrl: './verifypage.html',
  styleUrl: './verifypage.css',
  standalone: true
})
export class Verifypage {
  message = ''
  constructor(private router:Router){}
   authservice = inject(AuthService)
   async emailverify(){
   const result = await this.authservice.reloadandverif()
    
    if (result){
       this.router.navigate(['/dashboard'])
       console.log("verified")
    }
    else{
      this.message="Not verified yet. Please check your email or try again"
      console.log("not verified")
    }
     
    

   }
}
