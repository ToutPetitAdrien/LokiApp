//configuration connection avec facebook
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '986317348133079',
    secret: 'b9bb6c9b04ddebb9116bc36df4be73b1'
})

Accounts.onCreateUser(function(options,user){
    options.profile.email = user.services.facebook.email;
    options.profile.family_name = user.services.facebook.last_name;
    options.profile.first_name = user.services.facebook.first_name;
    options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    options.profile.gender = user.services.facebook.gender;
    options.profile.link = user.services.facebook.link;
    options.profile.service = "facebook";

    user.profile = options.profile

    return user
})
