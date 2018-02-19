'use strict'

const fs = require( 'fs' );
const request = require( 'request' );

request( {
  uri: `http://tripbot.tripsit.me/api/tripsit/getAllDrugs`,
  method: 'GET'
}, function( error, response, body ) {
  var json = body;
  fs.writeFile('getAllDrugs.json', json, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('file saved successfully');
      process.exit(0);
    }
  });
} );
