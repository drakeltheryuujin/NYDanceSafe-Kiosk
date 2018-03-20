var appRoot = process.cwd();
var async = require("async");
var _ = require("lodash");


module.exports = function(app) {

  const User = app.models.User;
  const Role = app.models.Role;
  const RoleMapping = app.models.RoleMapping;

  Role.findOrCreate({
    where: {
      name: "admin"
    }
  }, function(err, role) {
    if (err) throw err

    console.log(role)

    User.findOrCreate({
      where: {
        email: "kellyecodes@gmail.com"
      }
    }, function(err, user) {

      console.log(user)

      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: user.id
      }, function(err, principal) {
        if (err) throw err;
      });
      console.log("User created")
    });
  });

  console.log("User Data succesfully migrated")
};
