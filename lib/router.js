//define routes
FlowRouter.route('/',{
    name: 'index',
    action: function(){
        BlazeLayout.render('index')
    }
});

FlowRouter.route('/register',{
    name: 'register',
    action: function(){
        BlazeLayout.render('register')
    }
})
