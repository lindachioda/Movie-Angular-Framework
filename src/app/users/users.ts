import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserServicies } from '../servicies/user-servicies';
import { User } from '../user/user';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { UsersProfilo } from './users-profilo'; 
import { FilmsService } from '../servicies/films-service';
import { Films } from '../interface/films';
import { Favorites } from '../interface/favorites';

@Component({
  selector: 'app-users',
  imports: [CommonModule, UsersProfilo],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit{

  users: User[] = []
  userSelezionati?: User //variabile che gestisce la lista di utenti e il loro profilo, in child è user?: User

  films: Films[] =[]
  favorites: Favorites[] = []

  constructor(private userServicies:UserServicies, private filmsService:FilmsService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    //this.users = this.userServicies.getUsers()
    this.userServicies.getUsers().subscribe((user)=>{
      this.users = user
      this.cdr.detectChanges()
      console.log(user)
    })

    this.filmsService.getPopolari().subscribe (popolari => { //UNIRE DUE URL/ get tutti film
    this.filmsService.getTop().subscribe (top => {
      this.films = [...popolari, ...top]
      this.cdr.detectChanges()
      console.log(this.films)
    })
  })

  this.filmsService.getFavorites().subscribe (favorite => { //prendi preeferiti
    this.favorites = favorite //[favorites]="favorites"
    console.log(favorite)
  })
}

  clickUser(user:User){
    this.userSelezionati = user
  }

}
