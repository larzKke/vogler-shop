Template.Nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Bert.alert( 'Sind sind ausgeloggt!', 'success', 'fixed-top' );
        FlowRouter.go('login');
    }
});
