Template.CartItem.helpers({
  itemSubTotal: function() {
    let subTotal = this.price * this.quantity
    return subTotal.toFixed(2);
  }
});


Template.CartItem.events({
    'click .delete': function() {
        let cart = Carts.findOne({});
        Carts.update({_id: cart._id},{$pull: {cartItems: this}});
    },
    'click .incr-quantity': function() {
        let item = this;
        Meteor.call('incrQuantity', item, function(err,res){
          if (err) {
            console.log(err);
            Bert.alert( 'Ein Fehler ist aufgetreten!', 'danger', 'fixed-bottom' );
          }
        });

    },
    'click .decr-quantity': function() {
        let item = this;
        Meteor.call('decrQuantity', item, function(err,res){
          if (err) {
            Bert.alert( 'Ein Fehler ist aufgetreten!', 'danger', 'fixed-bottom' );
          }
        });
    }
})
