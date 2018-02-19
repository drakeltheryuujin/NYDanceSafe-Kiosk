var async = require('async');
var psqllDatasourceName = 'dskiosk';
/*
module.exports = function(app) {
  //data sources
  var psqlDs = app.dataSources[psqllDatasourceName];
  //create all models
  async.parallel({
    reviewers: async.apply(createReviewers),
    coffeeShops: async.apply(createCoffeeShops),
  }, function(err, results) {
    if (err) throw err;
    createReviews(results.reviewers, results.coffeeShops, function(err) {
      if (err) throw err;
      console.log('> models created sucessfully');
    });
  });
  //create reviewers
  function createReviewers(cb) {
    psqlDs.automigrate('Reviewer', function(err) {
      if (err) return cb(err);
      var Reviewer = app.models.Reviewer;
      Reviewer.create([
        {email: 'foo@bar.com', password: 'foobar'},
        {email: 'john@doe.com', password: 'johndoe'},
        {email: 'jane@doe.com', password: 'janedoe'}
      ], cb);
    });
  }
  //create coffee shops
  function createCoffeeShops(cb) {
    psqlDs.automigrate('CoffeeShop', function(err) {
      if (err) return cb(err);
      var CoffeeShop = app.models.CoffeeShop;
      var shops = [
        {name: 'Bel Cafe',openingHour:10, closingHour:18},
        {name: 'Three Bees Coffee House',openingHour:6, closingHour:15},
        {name: 'Caffe Artigiano',openingHour:17, closingHour:24},
      ];
      //add city if it's in the model
      if(CoffeeShop.definition.properties.hasOwnProperty('city')){
        var cities = ['Vancouver', 'San Mateo'];
        shops.forEach(function(shop, idx){
          shop.city = cities[idx%2];
        });
      }
      CoffeeShop.create(shops, cb);
    });
  }
};
*/
