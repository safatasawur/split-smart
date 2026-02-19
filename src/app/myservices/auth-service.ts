import { Injectable } from '@angular/core';
import { Auth ,createUserWithEmailAndPassword,User } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@angular/fire/auth'
import { sendEmailVerification } from '@angular/fire/auth';
import { Firestore ,collection,addDoc,setDoc,serverTimestamp,doc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    constructor(private auth: Auth, private firestore:Firestore) {}
  //   async createuser(email: string, password: string,name:string) {
  //   console.log("Creating user with email:", email, "and password:", password);
  //   const userCollectionRef = collection(this.firestore, 'users');
  //   const credentials=  await createUserWithEmailAndPassword(this.auth, email, password)
  //   await addDoc(userCollectionRef, { email: email, uid: credentials.user.uid,name:name });
  //   return credentials
  // }
  async createuser(email: string, password: string, name: string) {
  const cred = await createUserWithEmailAndPassword(
    this.auth,
    email,
    password
  );

  const user = cred.user;
  if (!user) throw new Error('No user');

  await setDoc(
    doc(this.firestore, 'users', user.uid),
    {
      name,
      email: user.email,
      createdAt: serverTimestamp(),
    }
  );

  return cred;
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
