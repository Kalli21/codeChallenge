import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
 
  // baseUrl:string =  "games?year=2000&week=12&seasonType=regular";
  
  constructor(private http: HttpClient) { }
  
  getGames(anio:string,semana:string){    
    return this.http.get(`/games?year=${anio}&week=${semana}&seasonType=regular`);
  }
}
