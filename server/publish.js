Meteor.publish('products', function() {
    return Products.find({});
});

Meteor.publish('orders', function() {
    return Orders.find({});
});

Meteor.publish('singleproduct', function(id) {
    check(id, String);
    return Products.find({_id: id});
});

Meteor.publish('cartitems', function() {
    return cartItems.find({});
});

Meteor.publish('images', function () {
  return Images.find({}).cursor;
});
