var async = require('async');
var psqllDatasourceName = 'dskiosk';

module.exports = function(app) {
  //data sources
  var psqlDs = app.dataSources[psqllDatasourceName];
  //create all models
  async.parallel({
    users: async.apply(createUsers)
  }, function(err, results) {
    if (err) throw err;
    createUsers(results.users, function(err) {
      if (err) throw err;
      console.log('> models created sucessfully');
    });
  });
  //create users
  function createUsers(cb) {
    psqlDs.automigrate('User', function(err) {
      if (err) return cb(err);
      var User = app.models.User;
      User.create([
        {email: 'kellyecodes+admin@gmail.com', password: 'password'},
        {email: 'kellyecodes@gmail.com', password: 'password'}
      ], cb);
    });
  }
};
