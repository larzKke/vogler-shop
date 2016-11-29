import cartItems from '../../../collections/Cart';

Session.setDefault('Cart-itemCount', 0);
Session.setDefault('Cart-itemTotal', 0);
Session.setDefault('Cart-weightTotal', 0);


Tracker.autorun(function () {
  Meteor.subscribe('carts'); // TODO: GLOBAL -> LOCAL

  let cart = Carts.findOne({});
  if (cart) {
    let total = 0;
    let weightTotal = 0;
    let cartItems = cart.cartItems;
    // console.log(cartItems.count())
    cartItems.forEach(function(item){
      total += (item.price * item.quantity);
      weightTotal += (item.weight * item.quantity);
    });
    Session.set('Cart-itemTotal', Math.floor(total*100)/100);
    Session.set('Cart-itemCount', cartItems.length);
    Session.set('Cart-weightTotal', weightTotal);
  }
});
