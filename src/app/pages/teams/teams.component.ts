import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  conference:any;
  id:any;
  public team: any;
  public teams :any=[];

  constructor(private service: TeamsService,
    private route:ActivatedRoute,
    ) { }


  ngOnInit(): void {
    this.conference = this.route.snapshot.paramMap.get('home_conference');
    this.id = this.route.snapshot.paramMap.get('id');
    
    
    this.service.getTeam(this.conference).subscribe((data:any)=>{

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].id);
        if(data[i].id==this.id){
          this.team = data[i];
          break;
        }
      }
      
      
    });
  }

}
