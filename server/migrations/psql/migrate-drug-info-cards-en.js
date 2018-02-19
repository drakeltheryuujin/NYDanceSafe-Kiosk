var appRoot = process.cwd();
var async = require("async");

module.exports = {
  up: function(dataSource, next) {
    const json = require(`${appRoot}/server/migrations/static-data/drug-info-cards.json`);
    const DrugInfoCard = app.models.DrugInfoCard;
    console.log("test")

    async.each(json, function( detail, nextDetail ) {
      DrugInfoCard.find( {}, {}, function( err, drugInfoCard ) {
        if (err) return nextDetail(err);
        if (_.isEmpty(detail)) return nextDetail();
        drugInfoCard.create({
          name: detail.name,
          prettyName: detail.prettyName,
          displayUrl: detail.displayUrl,
          previewUrl: detail.previewUrl,
          downloadUrl: detail.downloadUrl
        }, nextDetail)
      })
    }, next)
  },
  down: function(dataSource, next) {
    next();
  }
};



