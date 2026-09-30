import { Injectable } from '@angular/core';
import { Registrazione } from '../login-signup/registrazione';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class LogSignService {

  private isLogin = false

  constructor(private http:HttpClient){
    this.restore()
  }

  signUp(obj:Registrazione){//signup.ts
    console.log(obj)
    return this.http.post(`${environment.apiUrl}/users`, obj)
  }

  logIn(){ //login.ts
    return this.http.get<Registrazione[]>(`${environment.apiUrl}/users`)
  }

  getIsLogin(){ //get authguard
    //let user = localStorage.getItem("user")
    return this.isLogin 
  }

  setLogin(user: Registrazione){ //Ativa login
        this.isLogin = true
        localStorage.setItem("user", JSON.stringify(user));
}

  restore() {//per localstorage
    let user = localStorage.getItem("user")
       if(user) {
        this.isLogin = true
      }else {
        this.isLogin = false
      }
    }

}
