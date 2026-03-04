import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../service/user';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  public username:string|null

  constructor(private route:ActivatedRoute,private user:User) {
    // this.id=this.route.snapshot.params['id']
    this.username=this.route.snapshot.paramMap.get('user')

  }
  private updateUserState() {
    this.username = this.user.getUsername();

  }
}
