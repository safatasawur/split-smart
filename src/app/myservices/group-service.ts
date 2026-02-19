import { Injectable } from '@angular/core';
import { Group } from '../model/group.type';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private firestore: Firestore,private auth:Auth) {
  }
  
  async createGroup( name: string,  createdBy: string, members: string[],description?: string) {
    

    const newGroup: Group = {
  name:name,
  description:description || '',
  createdBy:createdBy,
  createdAt: new Date(),
  updatedAt: new Date(),
  members: members    
  }
  const groupref=collection(this.firestore,'groups')
   return  await addDoc(groupref,newGroup)

  }



// getUserGroups()
// getGroupById()
// addExpense()
// getExpenses()
// updateExpense()
}
