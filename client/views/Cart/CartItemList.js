Template.CartItemList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('carts');
  });
});

Template.CartItemList.helpers({
    cart() {
      return Carts.findOne({});
    },
    itemTotal() {
      let total = Session.get('Cart-itemTotal');
      return total.toFixed(2);
    }
});
