import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Films } from '../interface/films';
import { Generi } from '../film-components/generi/generi';
import { Genres } from '../interface/genres';
import { Favorites } from '../interface/favorites';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {

  films:Films[] = []
  generi:Genres[] = []
  favorites:Favorites[] =[]

  constructor(private http:HttpClient){}

  getPopolari() {//get i film POPOLARI
    return this.http.get<Films[]>(`${environment.apiUrl}/movies-popular`)
  }

  getTop() {//get i film TOPRATED
    return this.http.get<Films[]>(`${environment.apiUrl}/movies-toprated`)
  }

  getGeneri() {//get i generi
    return this.http.get<Genres[]>(`${environment.apiUrl}/genres`)
  }

  getFavorites(){
    return this.http.get<Favorites[]>(`${environment.apiUrl}/favorites`)
  }
}
