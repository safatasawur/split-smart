import { Component, inject } from '@angular/core';
import { Profile } from '../autho/profile/profile';
import { GroupService } from '../myservices/group-service';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [Profile, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true
})
export class Dashboard {
  constructor(private router:Router){}
  groupService = inject(GroupService);
  id=''
  creatingGroup(){
    console.log('create button clicked')
    this.router.navigate(['/creategroup'])
  }
}
