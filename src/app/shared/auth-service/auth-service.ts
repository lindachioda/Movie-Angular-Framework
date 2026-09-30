import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn:boolean = true 

  isAuthenticated() {
    return this.isLoggedIn
  }
}
