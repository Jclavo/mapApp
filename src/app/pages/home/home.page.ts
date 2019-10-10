import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx'; 7

// import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
//import { Map, tileLayer, marker, icon } from 'leaflet';

import leaflet from 'leaflet';

import { CoordinatesModel } from '../../models/Coordinates.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private map: any;
  private latitudeHome: number;
  private longitudeHome: number;

  private coordinatesList: Array<CoordinatesModel>;

  constructor(private geolocation: Geolocation,
    // private map: Map,
  ) {
    this.latitudeHome = -15.793262;
    this.longitudeHome = -47.883478;

    this.coordinatesList = [];
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

    // https://www.buenasdicas.com/pontos-turisticos-brasilia-1734/

    this.coordinatesList.push(new CoordinatesModel('Memorial JK','',-15.783896,-47.913365));
    this.coordinatesList.push(new CoordinatesModel('Torre de TV','',-15.790241,-47.892789));
    this.coordinatesList.push(new CoordinatesModel('Museu Nacional','',-15.795650,-47.878197));
    this.coordinatesList.push(new CoordinatesModel('Catedral Metropolitana','',-15.798153,-47.875527));
    this.coordinatesList.push(new CoordinatesModel('Congresso Nacional','',-15.799407,-47.864152));
    // this.coordinatesList.push(new CoordinatesModel('Banco Central','',0,0));
    // this.coordinatesList.push(new CoordinatesModel('Pontão do Lago Sul','',0,0));
    // this.coordinatesList.push(new CoordinatesModel('Ponte JK','',0,0));
    // this.coordinatesList.push(new CoordinatesModel('Superquadra 308 Sul','',0,0));
    // this.coordinatesList.push(new CoordinatesModel('Parque da Cidade','',0,0));

    for (const value of this.coordinatesList) {
      // marker([property.lat, property.long]).addTo(this.map)
      //   .bindPopup(property.city)
      //   .openPopup();

      this.createMarker(value.latitude, value.longitude);

    }

   }

   ionViewWillLeave() {
    this.map.remove();
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
