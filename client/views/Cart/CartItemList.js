Template.CartItemList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('carts');
  });
});

Template.CartItemList.helpers({
    cart() {
      return Carts.findOne({});
    },
    itemTotal() {
      let total = Session.get('Cart-itemTotal');
      return total.toFixed(2);
    },
    Loading() {
      return Session.get('loading');
    }
});

Template.CartItemList.events({
  'click .prepareOrder': function(){
    Session.set('loading', true);
    Meteor.call('prepareOrder', function(err,res) {
      if (err) {
        Bert.alert( 'Ein Fehler ist aufgetreten!', 'danger', 'fixed-bottom' );
      }
      if (res) {
        FlowRouter.go('order');
        Session.set('loading', false);
      }
    })
  }
})
