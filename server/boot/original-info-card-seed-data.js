var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash");

module.exports = function(app) {
  const json = require(`${appRoot}/server/migrations/static-data/drug-info-card-originals.json`);
  const DrugInfoCardOriginal = app.models.DrugInfoCardOriginal;

  DrugInfoCardOriginal.destroyAll()

  async.each(json, function( detail, nextDetail ) {
    DrugInfoCardOriginal.find( {}, {}, function( err, drugInfoCardOriginal ) {
      if (err) return nextDetail(err);
      if (_.isEmpty(detail)) return nextDetail();
      DrugInfoCardOriginal.create({
        name: detail.name,
        prettyName: detail.prettyName,
        description: detail.description,
        displayUrl: detail.displayUrl,
        previewUrl: detail.previewUrl,
        downloadUrl: detail.downloadUrl
      }, nextDetail)
    })
  })
  console.log("Drug Info Card Original Data succesfully migrated")
};
