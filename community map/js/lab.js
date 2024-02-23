//lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jQuery must be loaded for this script to work.
// Author: Soriah Aniff <saniff.edu>
// Date: December 1st 2023
console.log("javascipt is working");

var map = L.map('map').setView([36.9741, -122.0308], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 40,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(map);

var Walnut = L.marker([36.9724881, -122.0308609]).addTo(map);
var popupWalnut = L.popup()
    .setLatLng([36.9724881, -122.0308609])
    .setContent("<b>Walnut Ave. Womens Center</b><br> Here is where Walnut Ave. is located, the other pins represent other private health care facilities that are located in Santa Cruz.")
    .openOn(map);

var Sutter = L.marker([36.9679718, -122.0382819]).addTo(map);

