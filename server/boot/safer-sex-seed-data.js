var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash");
var TinyURL = require('tinyurl');

module.exports = function(app) {
  const json = require(`${appRoot}/server/migrations/static-data/safer-sex.json`);
  const SaferSex = app.models.SaferSex;

  SaferSex.destroyAll()

  async.each(json, function( detail, nextDetail ) {
    SaferSex.find( {}, {}, function( err, saferSex ) {
      if (err) return nextDetail(err);
      if (_.isEmpty(detail)) return nextDetail();
      //Generate short url and store it to db
      TinyURL.shorten( detail.downloadUrl, function( tinyDownloadUrl ) {
        SaferSex.create({
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
  console.log("Safer Sex Data succesfully migrated")
};
