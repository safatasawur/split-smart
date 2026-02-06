import { Component } from '@angular/core';
import { Profile } from '../autho/profile/profile';

@Component({
  selector: 'app-dashboard',
  imports: [Profile],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true
})
export class Dashboard {

}
