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
  team: any;
  teams :any[]=[];

  constructor(private service: TeamsService,
    private route:ActivatedRoute,
    ) { }


  ngOnInit(): void {
    this.conference = this.route.snapshot.paramMap.get('home_conference');
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.service.getTeam(this.conference,this.id).subscribe((data:any)=>{
      // console.log(this.team);
      // this.team = data;
      // console.log(data[0].id);
      // this.teams.push(data);

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].id);
        if(data[i].id==this.id){
          console.log("aqui");
          this.team = data[i];
          
        }
      }
      
      // console.log(this.team);
      
    });
    console.log(this.team);    
    // console.log("___________________")
    // console.log(this.teams[0]);

    // // this.teams.forEach(dat =>{
    // //   // if(dat.id==this.id){
    // //   console.log("-----------------------")  
    // //   console.log(dat);
    // //   // }
    // // });

  }

}
