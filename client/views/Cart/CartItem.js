Template.CartItem.helpers({
  itemSubTotal: function() {
    let subTotal = this.price * this.quantity
    return subTotal.toFixed(2);
  },
  btnOff: () => {
    if (FlowRouter.getRouteName() === 'order') {
      return false
    }
    if (FlowRouter.getRouteName() === 'cart') {
      return true
    }
  }
});


Template.CartItem.events({
    'click .delete': function() {
        cartItems.remove({_id: this._id});
    },
    'click .incr-quantity': function() {
        cartItems.update({_id: this._id},{$inc: {quantity:1}})
    },
    'click .decr-quantity': function() {
        if(this.quantity == 1) {
          cartItems.remove({_id: this._id});
        }
        cartItems.update({_id: this._id},{$inc: {quantity:-1}})
    }
})
