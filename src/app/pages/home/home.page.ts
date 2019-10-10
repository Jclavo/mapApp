import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx'; 7

// import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
//import { Map, tileLayer, marker, icon } from 'leaflet';

import leaflet from 'leaflet';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private map: any;
  private latitudeHome: number;
  private longitudeHome: number;

  constructor(private geolocation: Geolocation,
    // private map: Map,
  ) {
    this.latitudeHome = -15.8329084;
    this.longitudeHome = -48.084577;
  }

  getCurrentPosition() {
    console.log('Holi');
    this.geolocation.getCurrentPosition().then((resp) => {

      console.log('Coordinates', resp);
      // resp.coords.latitude
      // resp.coords.longitude
      //leaflet.marker([, -48.08]).addTo(this.map);

      this.latitudeHome = resp.coords.latitude;
      this.longitudeHome = resp.coords.longitude,

        //this.leafletMap(this.latitudeHome,this.longitudeHome);
        this.createMarker(this.latitudeHome, this.longitudeHome);


    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ionViewDidEnter() {
    this.leafletMap(this.latitudeHome, this.longitudeHome);
  }

  leafletMap(latitude: number, longitude: number) {

    this.map = leaflet.map('mapId').setView([latitude, longitude], 13);
    //this.map = leaflet.map('mapId').setView([-15.83, -48.08]);

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    //leaflet.marker([-15.83, -48.08]).addTo(map);
  }

  createMarker(latitude: any, longitude: any) {
    leaflet.marker([latitude, longitude]).addTo(this.map);
  }

  setRandomMarkers() {

    



   }


}

//KINDS OF MAPS

// leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
//   attribution: 'edupala.com'
// }).addTo(this.map);

// tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
//   attribution: 'edupala.com © ionic LeafLet',
// }).addTo(mapConst);

// tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(mapConst);
