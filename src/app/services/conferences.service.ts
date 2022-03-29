import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService {

  constructor(private http:HttpClient) { }

  getConference(name:string){
     
    this.http.get("/conferences");

    return "sdad";  
  }

}
