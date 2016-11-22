import DeliverAdressSchema from '/collections/DeliverAdress.js';
import InvoiceAdressSchema from '/collections/InvoiceAdress.js';
import cartItemSchema from '/collections/CartItem.js';


Carts = new Mongo.Collection('carts');

Carts.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    return !!userId;
  }
});

CartSchema = new SimpleSchema({
  userID: {
    type: String,
    label: 'User'
  },
  cartItems: {
    type: [cartItemSchema]
  },
  forwarder: {
    type: Object,
    label: 'Lieferant',
    optional: true,
    blackbox: true

  }
});

Carts.attachSchema(CartSchema);

export default Carts;
