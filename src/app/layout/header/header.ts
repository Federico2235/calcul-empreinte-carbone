import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {User} from '../../service/user';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  public username:string|null
  public isLogged:boolean

  constructor(private router:Router,private user:User) {
  this.username=this.user.getUsername()
    this.isLogged=this.user.isLogged()
  }





  public goToCfP() {
    this.router.navigate(["/cfp"])
  }

  protected login() {
    this.user.login()
  this.updateUserState()
    this.router.navigate(["/cfp"])
  }

  protected logout() {
    this.user.logOut()
  this.updateUserState()
    this.router.navigate(["/"])
  }
  private updateUserState() {
    this.username = this.user.getUsername();
    this.isLogged = this.user.isLogged();
  }

}
