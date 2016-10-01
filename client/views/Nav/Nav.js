Template.Nav.helpers({
  user: function() {
    return Meteor.user();;
  },
  itemCount: () => {
    return Session.get('Cart-itemCount');
  }
});
