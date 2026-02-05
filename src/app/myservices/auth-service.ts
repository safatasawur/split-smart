import { Injectable } from '@angular/core';
import { Auth ,createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    constructor(private auth: Auth) {}
  createuser(email: string, password: string) {
    console.log("Creating user with email:", email, "and password:", password);
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredentials)=>{
     return userCredentials
    }).catch((err)=>{
      return err
    })
  }
}
