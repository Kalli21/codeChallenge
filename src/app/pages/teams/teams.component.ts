import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferencesService } from 'src/app/services/conferences.service';
import { TeamsService } from 'src/app/services/teams.service';
import { MatDialog } from '@angular/material/dialog';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  public detalles:boolean = false;
  conference:any;
  id:any;
  conf:string='';
  public team: any;
  public teams :any=[];

  constructor(private service: TeamsService,
    private route:ActivatedRoute,
    private confService:ConferencesService,
    private dialog: MatDialog
    ) { }


  ngOnInit(): void {
    this.conference = this.route.snapshot.paramMap.get('home_conference');
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.conf = this.confService.getConference(this.conference);
    
    this.service.getTeam(this.conf).subscribe((data:any)=>{

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].id);
        if(data[i].id==this.id){
          this.team = data[i];
          break;
        }
      }
      
      
    });
  }
  
  mostrar(){
    this.detalles = !this.detalles;

  }

  mostrarLocation(latitud:number,longitud:number){
    this.dialog.open(LocationComponent,{data:{
      lat: latitud,
      long: longitud
    }});
  }

  

}
