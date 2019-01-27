import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hbWdvbnphbGV6IiwiYSI6ImNqcmNrajV3bDFkaWU0M3A4eHlrdWx3YWsifQ.sRbIZiiJLNorVGwSO-AZmA';
    let { coordinates } = this.props;
    const mapOptions = {
      container: this.mapContainer,
      style: 'mapbox://styles/anamgonzalez/cjrckkrzs4dk22sqligcocble',
      zoom: 12,
      center: coordinates
    };
    const geolocationOptions = {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    };
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        // success callback
        (position) => {
          coordinates = [position.coords.longitude, position.coords.latitude]
          console.log(coordinates)
          mapOptions.center = coordinates
          this.createMap(mapOptions);
        },
        // failure callback
        () => { this.createMap(mapOptions); },
        // options
        geolocationOptions
      );
    }else{
      this.createMap(mapOptions);
    }
  }

  createMap = mapOptions => {
    this.map = new mapboxgl.Map(mapOptions);
    const map = this.map;
    map.on('load', (event) => {
      map.addSource(
        'places',
        {
          type: 'geojson',
          data: `/places.json`
        }
      );
      map.addLayer({ id: 'places', type: 'circle', source: 'places'});
    });
  }

  render() {
    const style = {
      width: '50vw',
      height: '500px',
      backgroundColor: 'azure'
    };
    return <div style={style} ref={el => this.mapContainer = el} />;
  }

  componentWillUnmount() {
    this.map.remove();
  }
}
