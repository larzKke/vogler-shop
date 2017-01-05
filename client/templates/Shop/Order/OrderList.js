Template.OrderList.helpers({
    cart() {
      return Carts.findOne({});
    },
    total(){
      let cart = Carts.findOne({});
      let itemTotal = Session.get('Cart-itemTotal');
      let sum = cart.forwarder.price + itemTotal
      return sum.toFixed(2);
    },
    itemSubTotal() {
      let subTotal = this.price * this.quantity
      return subTotal.toFixed(2);
    }
});
