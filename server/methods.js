Meteor.methods({
  itemToCart: function (item) {

    if (!Meteor.userId()) {
       this.stop()
    }

    if(item._id){
      item.productId = item._id;
      delete item._id;
    }

    item.userId = Meteor.userId();

    return cartItems.insert(item);
  },
  updateItemCart: function (item, productInCart) {
    return cartItems.update({_id : productInCart._id},{$inc: {amount : item.amount}});
  }
})
