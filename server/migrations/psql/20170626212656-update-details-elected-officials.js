var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash")

module.exports = {
  up: function(dataSource, next) {
    var details = require(`${appRoot}/server/migrations/psql/addition_elected_details.json`).details;
    var Elected = dataSource.models.Elected;

    async.each(details, function( detail, nextDetail ) {
      Elected.findOne({ where: {district_number: detail.district_number }}, function(err, elected) {
        if (err) return nextDetail(err);
        if (_.isEmpty(detail)) return nextDetail();
        
        elected.updateAttributes({
          office: detail.office,
          affiliation: detail.affiliation,
          affiliation_abbr: detail.affiliation_abbr,
          address: detail.address
        }, nextDetail)
      })
    }, next)
  },
  down: function(dataSource, next) {
    next();
  }
};



