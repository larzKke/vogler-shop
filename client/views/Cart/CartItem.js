Template.CartItem.helpers({
  itemSubTotal: function() {
    subTotal = this.price * this.amount
    return subTotal.toFixed(2);
  }
});

Template.CartItem.events({
    'click .delete': function() {
        cartItems.remove({_id: this._id});
    }
})
