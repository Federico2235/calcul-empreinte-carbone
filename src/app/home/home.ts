import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../service/user';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  userError: string = '';
  passwordError: string = '';

  public userName: string = ''
  public password: string = ''


  constructor(private router: Router, private user: User) {
  }

  protected goToProfile() {
    this.checkName();
    this.checkPsw();

    if (!this.userError && !this.passwordError) {
      this.router.navigate(["profile/jean"]);
    }

  }

  protected checkName() {
    if (this.userName.trim().length < 3) {
      this.userError = 'Le nom doit contenir au moins 3 caractères';
    } else {
      this.userError = '';
    }
  }

  protected checkPsw() {
    if (this.password.trim().length < 6) {
      this.passwordError = 'Le mot de passe doit contenir au moins 6 caractères';
    } else {
      this.passwordError = '';
    }
  }
}
