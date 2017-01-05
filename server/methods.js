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
      weight: item.weight,
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

  placeOrder: function (deliverAdress, invoiceAdress) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'not logged in');
    }

    let user = Meteor.userId();
    let total = 0;
    let weightTotal = 0;
    let order = {};
    let products = [];
    let cart = Carts.findOne({userID: user});
    let cartItems = cart.cartItems;

    order.deliverAdress = deliverAdress;
    order.invoiceAdress = invoiceAdress;

    cartItems.forEach(function(item){
      total += (item.price * item.quantity);
      weightTotal += (item.weight * item.quantity);
    });

    order.products = cartItems;
    order.total = (total + cart.forwarder.price).toFixed(2);
    order.userID = user;
    order.orderNo = incrementCounter(Counters,'orderNo');
    order.forwarder = cart.forwarder;


    return Orders.insert(order, function (error, result) {
      if (error) console.log(error);
      if (result) {

        let user = Meteor.user();
        Carts.remove({userID: user._id});

        SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));

        let emailData = {
          name: user.profile.name,
          total: order.total,
          cartItems: order.products,
          orderNo: order.orderNo
        };

        console.log('ORDER: ',order);
        console.log('EMAILDATA: ',emailData);

        Email.send({
          to: user.emails[0].address,
          from: "info@voglerhof.de",
          subject: "Ihre Bestellung im Voglerhof",
          html: SSR.render('htmlEmail', emailData),
        });
        console.log('order placed!', order, new Date());

      }
    });
  },

  removeOrder: function(order){
    if (order.userID != Meteor.userId()) {
       throw new Meteor.Error(401, 'Sie sind nicht der Besteller dieser Bestellung!');
    }
    return Orders.remove({_id: order._id, userID: order.userID});
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
  },

  removeOpenAt: function(openAt){
    if (!isAdmin()) {
      throw new Meteor.Error(401, 'no Admin');
    }
    return OpenAts.remove({_id: openAt._id});
  },

  // placeBreadReservation: function(openAt){
  //   if (!Meteor.userId()) {
  //     throw new Meteor.Error(401, 'not logged in');
  //   }
  //   return OpenAts.remove({_id: openAt._id});
  // }

})
