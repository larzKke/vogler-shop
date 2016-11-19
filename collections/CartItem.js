cartItems = new Mongo.Collection('cartItems');

cartItems.allow({
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

cartItemSchema = new SimpleSchema({
  shopID: {
    type: String,
    label: 'Artikel-Nr.'
  },
  name: {
    type: String,
    label: 'Name'
  },
  price: {
    type: Number,
    decimal: true,
    label: 'Preis'
  },
  productID: {
    type: String,
    label: 'Produkt ID'
  },
  quantity: {
    type: Number,
    label: 'Menge'
  },
  userID: {
    type: String,
    label: 'User'
  }
});

cartItems.attachSchema(cartItemSchema);

export default cartItems;
