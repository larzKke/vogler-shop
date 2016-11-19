Meteor.methods({
  itemToCart: function (item) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'not logged in');
    }
    if(item._id){
      item.productID = item._id;
      delete item._id;
    }
    item.userID = Meteor.userId();
      return cartItems.insert(item);
  },

  updateItemCart: function (item, productInCart) {
    return cartItems.update({_id : productInCart._id},{$inc: {quantity : item.quantity}});
  },

  placeOrder: function (deliverAdress, invoiceAdress) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'not logged in');
    }

    let user = Meteor.userId();
    let total = 0;
    let order = {};
    let products = [];
    let itemsToOrder = cartItems.find({userID: user});


    order.deliverAdress = deliverAdress;
    order.invoiceAdress = invoiceAdress;


    itemsToOrder.forEach(function(item){
      total += (item.price * item.quantity);
      products.push(item);
    });
    order.products = products;
    order.userID = user;
    order.total = total.toFixed(2);
    order.orderNo = incrementCounter(Counters,'orderNo');
    // order.date = new Date();

    return Orders.insert(order, function (error, result) {
      if (error) console.log(error);
      if (result) {
        console.log('order placed!', order, new Date());
        cartItems.remove({userID: user});
      }
    });
  },

  removeProduct: function (product) {
    if (!isAdmin()) {
      throw new Meteor.Error(401, 'no Admin');
    }
    let imageRemoved = Images.remove({_id: product.picture});
    let productRemoved = Products.remove({_id: product._id});

    if (imageRemoved && productRemoved) {
        console.log('Product & Image removed!');
        return true;
    } else {
        throw new Meteor.Error(500, 'ERR!');
    }
  }

})
