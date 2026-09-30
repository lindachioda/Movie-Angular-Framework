import { Component,Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Films } from '../../interface/films';
import { FilmsService } from '../../servicies/films-service';
import { Highlight } from '../../shared/direttive/highlight';


@Component({
  selector: 'app-film',
  imports: [MatButtonModule, Highlight, MatCardModule],
  templateUrl: './film.html',
  styleUrl: './film.scss',
})
export class Film {

  constructor(private filmsService:FilmsService){}

  @Input () film!:Films //collegamento a popolari e top
  
}
