import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamInterface } from '../Interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  // baseUrl:string =  '/teams?conference=ACC';

  constructor(private http: HttpClient) { }

  getTeam(team:string){    

    return this.http.get('/teams?conference='+team);
  }

  getPlayer(teamName:string){
    teamName = teamName.replace(' ','%20');
    return this.http.get('/roster?team='+teamName);
  }
}
