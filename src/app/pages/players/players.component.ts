import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';
import { PlayInterface } from '../../Interfaces/play.interface';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  
  @Input() teamName!:string;

  dataSource: any = [];
  displayedColumns:string[] = ['name','weight','height','position'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service:TeamsService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.service.getPlayer(this.teamName)
    .subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<PlayInterface>(data as PlayInterface[]);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  

  aplicarFlitro(filtro:any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }
}
