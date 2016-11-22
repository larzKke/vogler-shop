Template.OrderList.helpers({
    cart() {
      return Carts.findOne({});
    },
    total(){
      let cart = Carts.findOne({});
      let itemTotal = Session.get('Cart-itemTotal');

      return cart.forwarder.price + itemTotal;
    },
    itemSubTotal() {
      let subTotal = this.price * this.quantity
      return subTotal.toFixed(2);
    },
    forwarder() {

    }
});
