import cartItems from '../../../collections/Cart';

Session.setDefault('Cart-itemCount', 0);
Session.setDefault('Cart-itemTotal', 0);

Tracker.autorun(function () {
  Meteor.subscribe('cartitems');

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
