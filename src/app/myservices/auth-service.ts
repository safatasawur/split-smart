import { Injectable } from '@angular/core';
import { Auth ,createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@angular/fire/auth'
import { sendEmailVerification } from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
    constructor(private auth: Auth) {}
    async createuser(email: string, password: string) {
    console.log("Creating user with email:", email, "and password:", password);
    const credentials=  await createUserWithEmailAndPassword(this.auth, email, password)
    return credentials
  }
  
  
  async loginuser(email: string, password: string) {
        
    console.log("Logging in user with email:", email, "and password:", password);
    const credentails = await signInWithEmailAndPassword(this.auth, email, password)
    return credentails
  }

  async verifyuser() {
      const user = this.auth.currentUser
    if(!user){
      throw Error("user don't exist")
    }
   await sendEmailVerification(user)
  }
  async reloadandverif(){
        const user = this.auth.currentUser
    if(!user){
      throw Error("user don't exist")
    }
    await user.reload()
    return user.emailVerified
  }
  async logout(){
     const user = this.auth.currentUser
    await this.auth.signOut()
    console.log("Logged out user",user)
   

  }
  // async checkemailverif(){
  //       const user = this.auth.currentUser
  //   if(!user){
  //     throw Error("user don't exist")
  //   }
    
  // }
}
