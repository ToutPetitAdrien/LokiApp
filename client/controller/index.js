Template.index.events({
    'click .facebook-logout': function(event){
        Meteor.logout(function(err){
            if(err){
                throw new Meteor.error("Logout failed");
                console.log(err.reason);
            }
        })
    },
    'click .actions_popo': function(event){
        Meteor.call('addActions', 'popo')
        console.log('ok popo');
    },
    'click .actions_promenade': function(event){
        Meteor.call('addActions', 'promenade')
        console.log('ok promenade');
    },
    'click .actions_friandise': function(event){
        Meteor.call('addActions', 'friandise')
        console.log('ok friandise');
    },
    'click .actions_repas': function(event){
        Meteor.call('addActions', 'repas')
        console.log('ok repas');
    },
    'click .actions_douche': function(event){
        Meteor.call('addActions', 'douche')
        console.log('ok douche');
    }

})
