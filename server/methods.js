Meteor.methods({
  itemToCart: function (item) {
    if (!isAdmin()) {
      throw new Meteor.Error(401, 'no Admin');
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
  },

  placeOrder: function (deliverAdress, invoiceAdress) {
    if (!isAdmin()) {
      throw new Meteor.Error(401, 'no Admin');
    }

    user = Meteor.userId();
    total = 0;
    order = {};
    products = [];
    itemsToOrder = cartItems.find({userId: user});


    order.deliverAdress = deliverAdress;
    order.invoiceAdress = invoiceAdress;


    itemsToOrder.forEach(function(item){
      total += (item.price * item.amount);
      products.push(item);
    });
    order.products = products;
    order.user = user;
    order.total = total;

    cartItems.remove({userId: Meteor.userId()})
    return Orders.insert(order);
  },

  removeProduct: function (product) {
    if (!isAdmin()) {
      throw new Meteor.Error(401, 'no Admin');
    }
    let imageRemove = Images.remove({_id: product.picture})
    let productRemove = Products.remove({_id: product._id});
    return true
  }

})
