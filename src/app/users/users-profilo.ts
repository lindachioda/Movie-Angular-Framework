import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserServicies } from '../servicies/user-servicies';
import { User } from '../user/user';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/auth-service/auth-service';
import { Favorites } from '../interface/favorites';
import { Films } from '../interface/films';
import { Highlight } from '../shared/direttive/highlight';

@Component({
  selector: 'app-users-profilo',
  imports: [CommonModule, Highlight],
  templateUrl: './users-profilo.html',
  styleUrl: './users-profilo.scss',
})
export class UsersProfilo implements OnChanges{

  authService = inject(AuthService) //variabile per inserire Authguard

  filtratiPreferiti:Films[] = []//film filtrati per utente
  prefeUtenti:Favorites[] =[] //id dei film preferiti ddegli utenti

   constructor(private userServicies:UserServicies){}

   @Input() user?: User //in parent è: userSelezionati?: User

   @Input() favorites: Favorites[] = []//i film preferiti singolarmente
   @Input() films:Films[] = [] //tutti i film


   ngOnChanges() {
     //1) filtra i film per id dell'utente
      this.prefeUtenti = this.favorites.filter( favorites=>
        favorites.userId === this.user?.id
      )

      //2) filtra i film che hanno quel determinato id
      this.filtratiPreferiti = this.films.filter( film=>
        this.prefeUtenti.some( prefe=> //SOME: booleano, se esiste o no un elemento o piu che vadano bene per la condizione segnata
          prefe.movieId === film.id //se ci sono prendi i film che hanno id che corrisponde a movieID
        )
       )
     }
   }

