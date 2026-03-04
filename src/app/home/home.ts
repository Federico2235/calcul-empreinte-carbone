import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../service/user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router:Router,private user:User) {
  }

  public goToCfP() {
    this.router.navigate(["/cfp"])
  }

  protected login() {
    this.user.login()
  }

  protected logout() {
    this.user.logOut()
  }
}
