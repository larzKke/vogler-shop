import cartItems from '../../../collections/Cart';

Session.setDefault('Cart-itemCount', 0);
Session.setDefault('Cart-itemTotal', 0);

Tracker.autorun(function () {
  Meteor.subscribe('cartItems');

  var query = {};
  query.userId = Meteor.userId();

  var total = 0;
  var items = cartItems.find(query, {fields: {price: 1, amount: 1}});
  items.forEach(function(item){
    total += (item.price * item.amount);
  });
  Session.set('Cart-itemTotal', Math.floor(total*100)/100);
  Session.set('Cart-itemCount', items.count());
});


Template.Cart.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('cartItems');
  });
});

Template.Cart.helpers({
    items: () => {
      return cartItems.find({});
    },
    itemTotal: () => {
      let total = Session.get('Cart-itemTotal');
      return total.toFixed(2);
    }
});
