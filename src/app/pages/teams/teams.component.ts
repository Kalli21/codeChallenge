import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { TeamInterface } from 'src/app/Interfaces/team.interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  conference:any;
  id:any;
  team ?:TeamInterface;
  teams :TeamInterface[]=[];

  constructor(private service: TeamsService,
    private route:ActivatedRoute,
    ) { }


  ngOnInit(): void {
    this.conference = this.route.snapshot.paramMap.get('home_conference');
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.service.getTeam(this.conference,this.id).subscribe((data:TeamInterface)=>{
      // console.log(this.team);
      // this.team = data;

      this.teams.push(data[0]);
      
      // console.log(this.team);
      
    })    
    // console.log(this.teams);

    this.teams.forEach(dat =>{
      if(dat.id==this.id){
        console.log(dat);
      }
    });

  }

}
