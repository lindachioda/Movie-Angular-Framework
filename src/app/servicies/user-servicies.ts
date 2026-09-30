import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServicies {


  constructor(private http:HttpClient){}


  getUsers() {
    //mi ritorna un observable con oggetti di tipo utente
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }

  //getUsersId(id:number) {
    //return this.users.find(user=> user.id === id)
    //non tipizzo come array perchè prendo solo una parte
   // return this.http.get<User>(`http://localhost:3000/users/${id}`)
 // }

}
