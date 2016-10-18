Template.CartItemList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('cartItems');
  });
});

Template.CartItemList.helpers({
    items: () => {
      return cartItems.find({});
    },
    itemTotal: () => {
      let total = Session.get('Cart-itemTotal');
      return total.toFixed(2);
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
