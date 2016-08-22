Template.register.events({
    'click .facebook-login': function(event){
        Meteor.loginWithFacebook({loginStyle : 'popup'}, function(err){
            if(err){
                throw new Meteor.error("Connexion à Facebook a échoué");
                console.log(err.reason);
            }
            FlowRouter.go('/')
        })
    },
})
