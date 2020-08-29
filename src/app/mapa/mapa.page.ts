import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  
  constructor(private geolocation: Geolocation) { }
  ngOnInit(){ 
    this.getPosition() 
  }

  
  
  cargarMapa(longituded:number, latituded:number){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ5YW5tZW5kb3phIiwiYSI6ImNrZWRoemtlaTAyam4yeG85cDBjaWRhNWQifQ.iyfw6haDxi_31bUsbCoxrg';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15,
    center: [longituded,latituded]
    });

    map.on('load', function(){
      map.resize(); 
    })
  }

  getPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('latitude',resp.coords.latitude);
      console.log('longitude',resp.coords.longitude);
      console.log('ddd',resp);
      // resp.coords.latitude
      // resp.coords.longitude
     
      this.cargarMapa(resp.coords.longitude, resp.coords.latitude );
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  


}
