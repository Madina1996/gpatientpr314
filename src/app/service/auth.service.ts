import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected = false;

  users = [
    {
    prenom:"admin",
    email:"admin@admin",
    login:"admin",
    password:"passer"
    }
  ];

  constructor() { }

  isConnected(){
    return this.connected;

  }
  connection(login:any,password:any) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].login == login && this.users[i].password == password ){
        this.connected = true;
        return true
      }
    }
    return false;
  }
  deconnecter(){
    this.connected = false;
  }


}
