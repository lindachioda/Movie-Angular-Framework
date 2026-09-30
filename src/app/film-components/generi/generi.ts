import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FilmsService } from '../../servicies/films-service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Genres } from '../../interface/genres';
import { GeneriDettaglio } from './generi-dettaglio/generi-dettaglio';
import { Films } from '../../interface/films';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-generi',
  imports: [MatButtonModule, MatGridListModule, GeneriDettaglio,CommonModule, MatIconModule, FormsModule],
  templateUrl: './generi.html',
  styleUrl: './generi.scss',
})
export class Generi implements OnInit{

  generi: Genres[] = []
  films:Films[] = []

  genereDettaglio?: Genres //genere di generi-dettaglio.ts
  

  constructor(private filmsService:FilmsService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.filmsService.getGeneri().subscribe(genere=> {
      this.generi = genere
      this.cdr.detectChanges()
      console.log(this.generi)
    })


  this.filmsService.getPopolari().subscribe (popolari => { //UNIRE DUE URL
    this.filmsService.getTop().subscribe (top => {
      this.films = [...popolari, ...top]
      this.cdr.detectChanges()
      console.log(this.films)
    })
  })
}

  clikGeneri(genere:Genres){//click per il dettaglio di generi
    this.genereDettaglio = genere
  }

}
