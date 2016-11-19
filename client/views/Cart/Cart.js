import cartItems from '../../../collections/CartItem';

Session.setDefault('Cart-itemCount', 0);
Session.setDefault('Cart-itemTotal', 0);

Tracker.autorun(function () {
  Meteor.subscribe('cartItems');

  var query = {};
  query.userID = Meteor.userId();

  var total = 0;
  var items = cartItems.find(query, {fields: {price: 1, quantity: 1}});
  items.forEach(function(item){
    total += (item.price * item.quantity);
  });
  Session.set('Cart-itemTotal', Math.floor(total*100)/100);
  Session.set('Cart-itemCount', items.count());
});
