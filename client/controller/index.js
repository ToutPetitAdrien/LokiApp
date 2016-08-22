Template.index.events({
    'click .facebook-logout': function(event){
        Meteor.logout(function(err){
            if(err){
                throw new Meteor.error("Logout failed");
                console.log(err.reason);
            }
        })
    }
})
