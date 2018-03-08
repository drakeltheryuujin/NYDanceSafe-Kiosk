'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
var accountSid = 'TWILIO_SID'; 
var authToken = 'TWILIO_TOKEN';  

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

module.exports = function(Twilio) {
  Twilio.disableRemoteMethodByName("create", false);
  Twilio.disableRemoteMethodByName("upsert", true);
  Twilio.disableRemoteMethodByName("updateAll", true);
  Twilio.disableRemoteMethodByName("updateAttributes", true);

  Twilio.disableRemoteMethodByName("replaceById", true);
  Twilio.disableRemoteMethodByName("replace", true);
  Twilio.disableRemoteMethodByName("replaceOrCreate", true);
  Twilio.disableRemoteMethodByName("changeStream", true);
  Twilio.disableRemoteMethodByName("upsertWithWhere", true);

  Twilio.disableRemoteMethodByName("find", true);
  Twilio.disableRemoteMethodByName("findById", true);
  Twilio.disableRemoteMethodByName("findOne", true);

  Twilio.disableRemoteMethodByName("deleteById", true);

  Twilio.disableRemoteMethodByName("confirm", true);
  Twilio.disableRemoteMethodByName("count", true);
  Twilio.disableRemoteMethodByName("exists", true);
  Twilio.disableRemoteMethodByName("resetPassword", true);

  Twilio.disableRemoteMethodByName('__count__accessTokens', true);
  Twilio.disableRemoteMethodByName('__create__accessTokens', true);
  Twilio.disableRemoteMethodByName('__delete__accessTokens', true);
  Twilio.disableRemoteMethodByName('__destroyById__accessTokens', true);
  Twilio.disableRemoteMethodByName('__findById__accessTokens', true);
  Twilio.disableRemoteMethodByName('__get__accessTokens', true);
  Twilio.disableRemoteMethodByName('__updateById__accessTokens', true);
  Twilio.disableRemoteMethodByName('__patchById', true);

  Twilio.sendMessage = function (message) {

    client.messages.create({
      to: '+1' + message.number,  // Text this number
      from: 'SENDER', // From a valid Twilio number
      body: message.body
    })
    .then((message) => console.log(message.sid));

  };

  Twilio.remoteMethod('sendMessage', {
    accepts: [
      { arg: 'res', type: 'object', 'http': { source: 'res'} }
    ],
    returns: { arg: 'message', type: 'string' }
  });


};
