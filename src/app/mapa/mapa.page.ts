import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  array:any=[];
  constructor(private geolocation: Geolocation) { }
  ngOnInit(){ 
    this.getPosition() 
  }

  
  
  cargarMapa(longituded:number, latituded:number){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ5YW5tZW5kb3phIiwiYSI6ImNrZWRoemtlaTAyam4yeG85cDBjaWRhNWQifQ.iyfw6haDxi_31bUsbCoxrg';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 17,
    center: [longituded,latituded]
    });

    var marker = new mapboxgl.Marker()
    .setLngLat([longituded, latituded])
    .addTo(map);

    map.on('load', function(){
      map.loadImage(
        'assets/icon/ubicación.png',
// Add an image to use as a custom marker
function(error, image){
  if (error) throw error;
map.addImage('custom-marker', image);

map.addSource('places', {
  
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
    'features':[
      {
        'type': 'Feature',
    'properties':{
      'description':
    '<strong>Truckeroo</strong><p>Truckeroo brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>'
    },
    'geometry':{
      'type': 'Point',
    'coordinates': [longituded+0.001,latituded+0.001]
    }
  },
    {
        'type': 'Feature',
    'properties':{
      'description':
    '<strong>Truckeroo</strong><p>Truckeroo brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>'
    },
    'geometry':{
    'type': 'Point',
    'coordinates': [longituded+0.0013,latituded+0.0013]
    }
  }
]}
    
})

map.addLayer({
  'id': 'places',
  'type': 'symbol',
  'source': 'places',
  'layout': {
  'icon-image': 'custom-marker',
  'icon-allow-overlap': true
  }
  
      });   
    }
  )
})
    map.on('mouseleave', 'places', function() {
      map.getCanvas().style.cursor = '';
      popup.remove();
      });

    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
      });

    map.on('mouseenter', 'places', function(e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';
       
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;
       
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
       
      // Populate the popup and set its coordinates
      // based on the feature found.
      popup
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
      });

    
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
