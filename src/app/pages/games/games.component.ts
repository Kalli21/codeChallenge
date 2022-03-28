import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { GameInterface } from 'src/app/Interfaces/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  dataSource: any = [];
  displayedColumns:string[] = ['home','visitors'];
  anio:string='2000';
  semana:string='1';


  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service:GamesService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {

    
  } 

  buscarGames(){

    this.service.getGames(this.anio,this.semana)
    .subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<GameInterface>(data as GameInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);
      console.log(this.anio);
      console.log(this.semana);
    });


    console.log(this.anio);
    console.log(this.semana);
  }

  aplicarFlitro(filtro:any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }
  
   


}
