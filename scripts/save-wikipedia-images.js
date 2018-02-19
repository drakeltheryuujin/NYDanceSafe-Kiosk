'use strict';
var appRoot = process.cwd();
const request = require('request');
var json = require(`${appRoot}/scripts/json/AllDrugNames.json`)

var fs = require('fs');

const drugs = json.data[0];
const newJson = []

console.log('Starting download from Wikipedia...')
drugs.forEach((drug) => {
  //var imagePath = `${__dirname}/images/${drug}.json`;
  console.log(`Requesting ${drug} image`)
  request( {
    uri: `https://en.wikipedia.org/w/api.php?action=query&titles=${drug}&prop=pageimages&pithumbsize=1000`,
    method: 'GET'
  }, function( error, response, body ) {
    console.log('Request made succesfully')
    const key = Object.keys(body.query.pages)
    const url = body.query.pages[key].thumbnail.source;
    if( body.query.pages[key].thumbnail !== undefined ) {
      console.log(`${drug} image found`)
      fs.writeFileSync(`${drug}-image.png`, url, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log(`${drug} image saved successfully`);
        }
      });
    } else {
      console.log(`No image available for ${drug}.`)
    }
  } );
  process.exit(0);
});


