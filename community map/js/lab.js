//lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jQuery must be loaded for this script to work.
// Author: Soriah Aniff <saniff.edu>
// Date: December 1st 2023
console.log("javascipt is working");

var map = L.map('map').setView([36.9724881, -122.0308609], 20);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([36.9724881, -122.0308609]).addTo(map);

marker.bindPopup("<b>Walnut Ave. Women's Health Center</b><br>").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([36.9724881, -122.0308609])
    .setContent("Walnut Ave. Women Health Center")
    .openOn(map);
