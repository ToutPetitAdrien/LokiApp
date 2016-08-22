//define routes
FlowRouter.route('/',{
    name: 'index',
    action: function(){
        BlazeLayout.render('index')
    }
});

FlowRouter.route('/register',{
    triggersEnter: [function(context,redirect){
        if(Meteor.userId()){
            redirect('/')
        }
    }],
    name: 'register',
    action: function(){
        BlazeLayout.render('register')
    }
})
