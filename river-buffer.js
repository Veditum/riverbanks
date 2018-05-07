'use strict';

const turf = require('turf');
const lineChunk = require('@turf/line-chunk');
const SphericalMercator = require('@mapbox/sphericalmercator');
const tilebelt = require('@mapbox/tilebelt');
const river = require('./ken.json');
const tiles = new Set();
const bboxFeatures = [];
const chunks = lineChunk(river, 0.2, {units: 'kilometers'});
const getTiles = function (bbox) {
    const merc = new SphericalMercator({size: 256});
    var z = 16; //or 17
    const coords = merc.xyz(bbox, z);
    for (let x = coords.minX; x <= coords.maxX; x++) {
        for(let y = coords.minY; y <= coords.maxY; y++) {
            tiles.add([x, y].join(','));
        }
    }
};
const riverChunks = turf.buffer(chunks, 0.2, 'kilometers');
riverChunks.features.forEach((feature) => {
    const featureBBOX = turf.bbox(feature);
    bboxFeatures.push(turf.bboxPolygon(featureBBOX));
    getTiles(featureBBOX);
});

let arrayTiles = [...tiles];
arrayTiles = arrayTiles.map((tile) => tile.split(','));

// console.log(JSON.stringify(riverBuffer));
// console.log(JSON.stringify(turf.featureCollection(bboxFeatures)));
// console.log(arrayTiles.join('\n'));
const tileIndex = Math.floor(Math.random() * arrayTiles.length);

console.log(`https://a.tiles.mapbox.com/v4/mapbox.satellite/16/${arrayTiles[tileIndex][0]}/${arrayTiles[tileIndex][1]}@2x.png?access_token=pk.eyJ1IjoiZGlnaXRhbGdsb2JlIiwiYSI6IlhoSXdVYjAifQ.flmVKVzK9tUAebTkrd4BUA`);

