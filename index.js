import './style.css';
//import 'https://openlayers.org/en/v5.3.0/css/ol.css';
import * as ol from 'openlayers'

var map;
var mapLat = 0;
var mapLng = 0;
var mapDefaultZoom = 5; //14;
var view = new ol.View({
    center: ol.proj.fromLonLat([mapLng, mapLat]),
    zoom: mapDefaultZoom
});
var oldLayer;
function initMap() {
    map = new ol.Map({
        target: 'theMap',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
            })
        ],
        view: view
    });
    map.addControl(new ol.control.ZoomSlider());
}

initMap();
