Meteor.methods({

  updateItemCart: function (item) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'not logged in');
    }

    let user = Meteor.userId();

    let cartItem = {
      productID: item._id,
      shopID: item.shopID,
      name: item.name,
      price: item.price,
      userID: Meteor.userId(),
      quantity: item.quantity
    }

    // check if cart already exists
    let cartExist = Carts.findOne({userID: user});

    if (cartExist) {

        // check if product exists in cart
        let productExist = Carts.findOne({
          cartItems: {
            $elemMatch: {productID: item._id}
          }
        });

        if (productExist) {
          return Carts.update({_id: productExist._id, 'cartItems.productID': item._id},{
            $inc: {'cartItems.$.quantity' : item.quantity}
          });
        } else {
          return Carts.update({userID: user},{
            $push: {cartItems: cartItem}
          })
        }

    } else {
      let cartItems = [cartItem];
      return Carts.insert({
        userID: user,
        cartItems: cartItems
      })
    }
  },

  prepareOrder: function() {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'not logged in');
    }
    let cart = Carts.findOne({});
    let user = Meteor.userId();

    let forwarderDHL = {
          shopID: 'dhl123',
          name: 'DHL',
          price: 3.99,
          productID: '1234',
          quantity: 1,
          userID: user
    }

    let forwarderDPD = {
          shopID: 'dpd123',
          name: 'DPD',
          price: 9.99,
          productID: '5678',
          quantity: 1,
          userID: user
    }

    if (cart.cartItems.length < 2) {
      return Carts.update({userID: user},{
          $set: { forwarder: forwarderDHL }
      });
    } else {
      return Carts.update({userID: user},{
          $set: { forwarder: forwarderDPD }
      });
    }

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
  },

  incrQuantity: function (item) {
    return Carts.update({'cartItems.productID': item.productID},{$inc: {'cartItems.$.quantity':1}})
  },

  decrQuantity: function (item) {
    if (item.quantity == 1) {
      Carts.update({'cartItems.productID': item.productID},{$pull: {cartItems: item}});
    }
    return Carts.update({'cartItems.productID': item.productID},{$inc: {'cartItems.$.quantity':-1}})
  }

})
