import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {


  login(){
    const user ={name:'Jean'};
    localStorage.setItem('user',JSON.stringify(user))
  }

  logOut(){localStorage.removeItem('user')}

  isLogged(){
    const user =localStorage.getItem('user')
    return !! user
  }

  getUsername(){
    if (this.isLogged()){
      return JSON.parse(localStorage.getItem('user')!).name
    }
    return ''
  }
}
