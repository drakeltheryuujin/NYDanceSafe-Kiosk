var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash")

module.exports = {
  up: function(app, next) {
    const json = require(`${appRoot}/server/migrations/psql/processed/AllDrugsCorrectFormat.json`);
    const Substance = app.models.Substance;
    console.log("test")

    async.each(json, function( detail, nextDetail ) {
      Substance.find( {}, {}, function( err, substance ) {
        if (err) return nextDetail(err);
        if (_.isEmpty(detail)) return nextDetail();
        substance.create({
          name: detail.name,
          aliases: detail.aliases,
          summary: detail.summary,
          advice: detail.advice,
          bioAvailability: detail.bioavailability,
          dose: detail.formatted_dose,
          duration: detail.formatted_duration,
          onset: detail.formatted_onset,
          note: detail.note,
          afterEffects: detail.after-effects,
          combos: detail.combos,
          sources: detail.sources._general,
          drugEffects: detail.formatted_effects,
          drugPwEffects: detail.pweffects,
          drugCategories: detail.categories
        }, nextDetail)
      })
    }, next)
  },
  down: function(app, next) {
    next();
  }
};



