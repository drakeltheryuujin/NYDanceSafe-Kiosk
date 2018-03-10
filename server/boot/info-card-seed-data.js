require('dotenv').load();
var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash");
var TinyURL = require('tinyurl');

module.exports = function(app) {
  const json = require(`${appRoot}/server/migrations/static-data/drug-info-cards.json`);
  const DrugInfoCard = app.models.DrugInfoCard;

  DrugInfoCard.destroyAll()

  async.each(json, function( detail, nextDetail ) {
    DrugInfoCard.find( {}, {}, function( err, drugInfoCard ) {
      if (err) return nextDetail(err);
      if (_.isEmpty(detail)) return nextDetail();

      //Generate short url and store it to db
      TinyURL.shorten( detail.downloadUrl, function( tinyDownloadUrl ) {
        DrugInfoCard.create({
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
  console.log("Drug Info Card Data succesfully migrated")
};
