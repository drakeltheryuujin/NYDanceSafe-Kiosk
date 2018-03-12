var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash");
var TinyURL = require('tinyurl');

module.exports = function(app) {
  const json = require(`${appRoot}/server/migrations/static-data/hearing-protection.json`);
  const HearingProtection = app.models.HearingProtection;

  HearingProtection.destroyAll()

  async.each(json, function( detail, nextDetail ) {
    HearingProtection.find( {}, {}, function( err, hearingProtection ) {
      if (err) return nextDetail(err);
      if (_.isEmpty(detail)) return nextDetail();
      //Generate short url and store it to db
      TinyURL.shorten( detail.downloadUrl, function( tinyDownloadUrl ) {
        HearingProtection.create({
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
  console.log("HearingProtection Data succesfully migrated")
};
