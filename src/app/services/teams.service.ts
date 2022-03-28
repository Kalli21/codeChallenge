import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamInterface } from '../Interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  // baseUrl:string =  '/teams?conference=ACC';

  constructor(private http: HttpClient) { }

  getTeam(team:string,id:number){    

    return this.http.get<TeamInterface>('/teams?conference=ACC');
  }
}
