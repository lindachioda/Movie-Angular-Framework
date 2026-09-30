import { Component, Input, OnChanges } from '@angular/core';
import { FilmsService } from '../../../servicies/films-service';
import { Genres } from '../../../interface/genres';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Films } from '../../../interface/films';
import { Highlight } from '../../../shared/direttive/highlight';


@Component({
  selector: 'app-generi-dettaglio',
  imports: [MatButtonModule, Highlight, MatCardModule, CommonModule],
  templateUrl: './generi-dettaglio.html',
  styleUrl: './generi-dettaglio.scss',
})
export class GeneriDettaglio implements OnChanges{

  constructor(private filmsService:FilmsService){}

  @Input() genere?:Genres //in parent è: genereDettagli?: Genres
  @Input() films:Films[] = [] //passo tutti i film!!! non solo uno, che poi vanno filtrati per genere

  filtratiGeneri:Films[] = [] //variabile di film filtrati per id di genere!

  ngOnChanges(){ //per passare gli @Input usa onChanges invece che onInit
    if(this.genere){ //filtra i film per genere!!
      this.filtratiGeneri = this.films.filter( film=>
        film.genre_ids.includes(this.genere!.id) //"!" per dichiarare che non sarà undefined
      )
       console.log(this.genere.id)
    }
  }
}
