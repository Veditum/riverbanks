'use strict';

const turf = require('turf');
const SphericalMercator = require('@mapbox/sphericalmercator');
const tilebelt = require('@mapbox/tilebelt');

const line = require('./sutlej.json');
const buffered = turf.buffer(line, 0.1, 'kilometers');
console.log(buffered);
const tiles = [];


// const merc = new SphericalMercator({size: 256}); // size is irrelevant for the part of this lib we're gonna use
// var z = 16; //or 17
// const coords = merc.xyz(bbox, z);
// for (let x = coords.minX; x <= coords.maxX; x++) {
//   for(let y = coords.minY; y <= coords.maxY; y++) {
//     tiles.push(tilebelt.tileToGeoJSON([x, y, z]));
//   }
// }

// const tileIndex = Math.floor(Math.random() * tiles.length);

// console.log(`https://a.tiles.mapbox.com/v4/mapbox.satellite/16/${tiles[tileIndex][0]}/${tiles[tileIndex][1]}@2x.png?access_token=pk.eyJ1IjoiZGlnaXRhbGdsb2JlIiwiYSI6IlhoSXdVYjAifQ.flmVKVzK9tUAebTkrd4BUA`);

