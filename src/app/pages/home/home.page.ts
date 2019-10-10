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

  //private map: Map;

  constructor(private geolocation: Geolocation,
    // private map: Map,
  ) { }

  getCurrentPosition() {
    console.log('Holi');
    this.geolocation.getCurrentPosition().then((resp) => {

      console.log('Coordinates', resp);
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom



    // tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    //   attribution: 'edupala.com © ionic LeafLet',
    // }).addTo(mapConst);

    // tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(mapConst);

    // tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    //   attribution: 'edupala.com'
    // }).addTo(map);

    // let markPoint = marker([-15.83, -48.08]).addTo(this.map)


    // marker( [-15.83, -48.08], {icon: customMarkerIcon})
    //  marker( [-15.83, -48.08])
    //    .addTo(mapConst)
    //    .bindPopup('Hi! <br> I am here, beach!!.')
    //    .openPopup();

    //marker([51.5, -0.09]).addTo(this.map);


    // tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    //   attribution: 'edupala.com'
    // }).addTo(this.map);

    // const markPoint = marker([-15.83, -48.08]);
    // markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
    // this.map.addLayer(markPoint);

    var map = leaflet.map('mapId').setView([-15.8329084, -48.084577], 13);

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    leaflet.marker([-15.83, -48.08]).addTo(map);
    // .bindPopup('xd')
    // .openPopup();


  }

}
