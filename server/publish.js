Meteor.publish('products', function() {
    return Products.find({});
});

Meteor.publish('carts', function() {
    return Carts.find({userID: this.userId});
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

Meteor.publish('images', function () {
  return Images.find({}).cursor;
});
