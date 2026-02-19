import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class UserServices {
    constructor(private firestore: Firestore) {}

  getUserByEmail(email: string) {
    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('email', '==', email));

    return getDocs(q);
  }
}


