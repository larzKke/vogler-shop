Template.CartItem.helpers({
  itemSubTotal: function() {
    subTotal = this.price * this.amount
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
    }
})
