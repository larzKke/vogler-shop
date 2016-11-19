Meteor.publish('products', function() {
    return Products.find({});
});

Meteor.publish('orders', function() {
    return Orders.find({});
});

Meteor.publish('myOrders', function() {
    return Orders.find({userID: this.userId});
});

Meteor.publish('singleProduct', function(id) {
    check(id, String);
    return Products.find({_id: id});
});

Meteor.publish('cartItems', function() {
    return cartItems.find({userID: this.userId});
});

Meteor.publish('images', function () {
  return Images.find({}).cursor;
});
