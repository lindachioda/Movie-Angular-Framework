import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FilmsService } from '../../servicies/films-service';
import { Films } from '../../interface/films';
import { Film } from '../film/film';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-rated',
  imports: [Film, CommonModule],
  templateUrl: './top-rated.html',
  styleUrl: './top-rated.scss',
})
export class TopRated implements OnInit{

  films:Films[] = []
  
    constructor(private filmsService:FilmsService, private cdr: ChangeDetectorRef){}
  
    ngOnInit(): void {
  
      this.filmsService.getTop().subscribe (film => { //get popolari
        this.films = film
        this.cdr.detectChanges()
        console.log(this.films)
      })
    }
}
