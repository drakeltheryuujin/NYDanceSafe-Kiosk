var async = require( 'async' );
var request = require( 'request' );
var _ = require( 'lodash' );

module.exports = {
  up: function( dataSource, next ) {
    var Elected = dataSource.models.Elected;

    Elected.find( {}, {}, function( err, electeds ) {
      async.eachSeries( electeds, function( elected, nextElected ) {
        if( !elected.address ) return nextElected();

        request( {
          uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${elected.address},NY`,
          method: 'GET'
        }, function( error, response, body ) {
          body = JSON.parse(body);
          var coordinates = _.get(body, 'results.0.geometry.location');
          if(!coordinates) return nextElected();

          elected.coordinates = [coordinates.lat, coordinates.lng];
          elected.save({validate: false}, nextElected);
        } );
      } )
    }, next )
  },
  down: function( dataSource, next ) {
    next();
  }
};