import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  title ='google-maps';
  lat:number;
  long:number;

  constructor(private dialog:MatDialogRef<LocationComponent>,
    @Inject(MAT_DIALOG_DATA) private data:{lat:number,long:number}) { 

      this.lat=data.lat;
      this.long=data.long;

    }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyD1fgKftJWbRYWskzPkcppxQJLjRYT_B08',
    });

    loader.load().then(()=>{
      new google.maps.Map(document.getElementById('map')!,{
        center: {lat: this.lat, lng:this.long},
        zoom:19
      });
    });

  }

}
