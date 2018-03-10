var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash");
var TinyURL = require('tinyurl');

module.exports = function(app) {
  const json = require(`${appRoot}/server/migrations/static-data/harmreduction.json`);
  const Harmreduction = app.models.Harmreduction;

  Harmreduction.destroyAll()

  async.each(json, function( detail, nextDetail ) {
    Harmreduction.find( {}, {}, function( err, harmreduction ) {
      if (err) return nextDetail(err);
      if (_.isEmpty(detail)) return nextDetail();
      //Generate short url and store it to db
      TinyURL.shorten( detail.downloadUrl, function( tinyDownloadUrl ) {
        Harmreduction.create({
          name: detail.name,
          prettyName: detail.prettyName,
          description: detail.description,
          displayUrl: detail.displayUrl,
          previewUrl: detail.previewUrl,
          downloadUrl: tinyDownloadUrl
        }, nextDetail)
      });
    })
  })
  console.log("Harmreduction Data succesfully migrated")
};
