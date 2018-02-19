var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash");

module.exports = function(app) {
  const json = require(`${appRoot}/server/migrations/static-data/drug-info-cards.json`);
  const DrugInfoCard = app.models.DrugInfoCard;

  DrugInfoCard.destroyAll()

  async.each(json, function( detail, nextDetail ) {
    DrugInfoCard.find( {}, {}, function( err, drugInfoCard ) {
      if (err) return nextDetail(err);
      if (_.isEmpty(detail)) return nextDetail();
      DrugInfoCard.create({
        name: detail.name,
        prettyName: detail.prettyName,
        displayUrl: detail.displayUrl,
        previewUrl: detail.previewUrl,
        downloadUrl: detail.downloadUrl
      }, nextDetail)
    })
  })
  console.log("Drug Info Card Data succesfully migrated")
};
