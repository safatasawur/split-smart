import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { inject } from '@angular/core';
import { GroupService } from '../../myservices/group-service';
import {Auth } from '@angular/fire/auth';
import { UserServices } from '../../myservices/user-services';
@Component({
  selector: 'app-groupform',
  imports: [FormsModule],
  templateUrl: './groupform.html',
  styleUrl: './groupform.css',
  standalone: true
})
export class Groupform {
  userService = inject(UserServices);
  constructor(private auth:Auth) {}
  groupService = inject(GroupService);
groupName=''
description=''
memberEmail=''
memberError=''
members: string[] = [];

async addMember(){
  this.memberError=''
  if(!this.memberEmail)return
  const snapshot = await this.userService.getUserByEmail(this.memberEmail)
  if(snapshot.empty){
    this.memberError='No user found with this email'
    return
  }
  const userDoc = snapshot.docs[0]
  const userData = userDoc.data()
  const userId = userDoc.id
  if(this.members.includes(userId)){
    this.memberError='User already added'
    return
  }
  this.members.push(this.memberEmail)
  this.memberEmail=''
  console.log('add member clicked')
}
// removeMember(index: number){
//   this.members.splice(index,1)
// }
async onSubmit(){
  const user = this.auth.currentUser
  console.log('Group Name:', this.groupName)
  console.log('Description:', this.description)
  if (!user) {
    console.error('No authenticated user found. Please log in first.');
    return;
  }
 await  this.groupService.createGroup(this.groupName,user.uid,[user.uid,...this.members],this.description)
 
}
}