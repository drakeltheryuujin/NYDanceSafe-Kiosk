'use strict';
var TinyURL = require('tinyurl');

module.exports = function(TextMessage) {

  TextMessage.disableRemoteMethodByName("upsert", true);
  TextMessage.disableRemoteMethodByName("updateAll", true);
  TextMessage.disableRemoteMethodByName("updateAttributes", true);

  TextMessage.disableRemoteMethodByName("replaceById", true);
  TextMessage.disableRemoteMethodByName("replace", true);
  TextMessage.disableRemoteMethodByName("replaceOrCreate", true);
  TextMessage.disableRemoteMethodByName("changeStream", true);
  TextMessage.disableRemoteMethodByName("upsertWithWhere", true);

  TextMessage.disableRemoteMethodByName("findOne", true);

  TextMessage.disableRemoteMethodByName("deleteById", true);

  TextMessage.disableRemoteMethodByName("confirm", true);
  TextMessage.disableRemoteMethodByName("count", true);
  TextMessage.disableRemoteMethodByName("exists", true);
  TextMessage.disableRemoteMethodByName("resetPassword", true);

  TextMessage.disableRemoteMethodByName('__count__accessTokens', true);
  TextMessage.disableRemoteMethodByName('__create__accessTokens', true);
  TextMessage.disableRemoteMethodByName('__delete__accessTokens', true);
  TextMessage.disableRemoteMethodByName('__destroyById__accessTokens', true);
  TextMessage.disableRemoteMethodByName('__findById__accessTokens', true);
  TextMessage.disableRemoteMethodByName('__get__accessTokens', true);
  TextMessage.disableRemoteMethodByName('__updateById__accessTokens', true);
  TextMessage.disableRemoteMethodByName('__patchById', true);

  TextMessage.on('set', function(ctx) {
    console.log(ctx)
    TinyURL.shorten( ctx.url, function( shortUrl ) {
      var newMessage =
      {
        "body": `Thanks for using a NY DanceSafe kiosk! Download the ${ctx.description} here: ${shortUrl}`,
        "number": ctx.toNumber
      }
      console.log(newMessage)
      TextMessage.app.models.Twilio.sendMessage(newMessage)
    });
  });
};
