Template.Nav.helpers({
  user() {
    return Meteor.user();
  },
  itemCount() {
    return Session.get('Cart-itemCount');
  }
});
