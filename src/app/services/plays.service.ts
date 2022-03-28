import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaysService {
  
  // baseUrl:string =  'https://api.collegefootballdata.com/plays?seasonType=regular&year=2004&week=1';
  baseUrl:string =  '/plays?seasonType=regular&year=2004&week=1';

  constructor(private http: HttpClient) { }

  getPlays(){    
    
    return this.http.get(this.baseUrl);
  }
}
