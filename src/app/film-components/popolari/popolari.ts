import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FilmsService } from '../../servicies/films-service';
import { Films } from '../../interface/films';
import { Film } from "../film/film";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-popolari',
  imports: [Film, CommonModule],
templateUrl: './popolari.html',
  styleUrl: './popolari.scss',
})
export class Popolari implements OnInit {

  films:Films[] = []

  constructor(private filmsService:FilmsService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {

    this.filmsService.getPopolari().subscribe (film => { //get popolari
       console.log("Risposta ricevuta")
      this.films = film
      this.cdr.detectChanges() //!!!! in console la route funziona subito mentre per stamparla in view serve this.cdr.detectChanges()
      console.log(this.films)
    })
  }
}
