'use strict';

module.exports = function(EmailMessage) {

  EmailMessage.disableRemoteMethodByName("upsert", true);
  EmailMessage.disableRemoteMethodByName("updateAll", true);
  EmailMessage.disableRemoteMethodByName("updateAttributes", true);

  EmailMessage.disableRemoteMethodByName("replaceById", true);
  EmailMessage.disableRemoteMethodByName("replace", true);
  EmailMessage.disableRemoteMethodByName("replaceOrCreate", true);
  EmailMessage.disableRemoteMethodByName("changeStream", true);
  EmailMessage.disableRemoteMethodByName("upsertWithWhere", true);

  EmailMessage.disableRemoteMethodByName("findOne", true);

  EmailMessage.disableRemoteMethodByName("deleteById", true);

  EmailMessage.disableRemoteMethodByName("confirm", true);
  EmailMessage.disableRemoteMethodByName("count", true);
  EmailMessage.disableRemoteMethodByName("exists", true);
  EmailMessage.disableRemoteMethodByName("resetPassword", true);

  EmailMessage.disableRemoteMethodByName('__count__accessTokens', true);
  EmailMessage.disableRemoteMethodByName('__create__accessTokens', true);
  EmailMessage.disableRemoteMethodByName('__delete__accessTokens', true);
  EmailMessage.disableRemoteMethodByName('__destroyById__accessTokens', true);
  EmailMessage.disableRemoteMethodByName('__findById__accessTokens', true);
  EmailMessage.disableRemoteMethodByName('__get__accessTokens', true);
  EmailMessage.disableRemoteMethodByName('__updateById__accessTokens', true);
  EmailMessage.disableRemoteMethodByName('__patchById', true);

  EmailMessage.on('set', function(ctx) {
    console.log(ctx)
    EmailMessage.app.models.Email.send({
      to: ctx.toEmail,
      from: 'newyork@dancesafe.org',
      subject: `Your ${ctx.description} download from a NY DanceSafe Kiosk`,
      html: `<div style="text-align: center;"><h1>Thanks for using a NY DanceSafe kiosk!</h1> <p>Download the ${ctx.description} here: <a href="${ctx.url}">${ctx.url}</a></p></div>`
    }, function(err, mail) {
      console.log('email sent!');
    });
  });
};
