import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService {

  constructor(private http:HttpClient) { }

  getConference(name:string){
     
    this.http.get("/conferences").subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].id);
        if(data[i].name==name){
          return data[i].abbreviation;
        }
      }
    });

    return "";  
  }

}
