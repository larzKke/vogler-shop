Meteor.publish('products', function() {
    return Products.find({});
});

Meteor.publish('singleProduct', function(id) {
    check(id, String);
    return Products.find({_id: id});
});



Meteor.publish('cartItems', function() {
    return cartItems.find({});
});
