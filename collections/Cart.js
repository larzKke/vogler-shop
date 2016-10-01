
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

// cartItemSchema = new SimpleSchema({
//     productId: {
//         type: String,
//         label: 'Produkt-Id'
//     },
//     artikelNr: {
//         type: String,
//         label: 'Artikel-Nr.'
//     },
//     name: {
//         type: String,
//         label: 'Name'
//     },
//     desc: {
//         type: String,
//         label: 'Beschreibung'
//     },
//     price: {
//         type: Number,
//         decimal: true,
//         label: 'Preis'
//     },
//     amount: {
//         type: Number,
//         label: 'Menge',
//         decimal: true
//     }
// });
//
// Cart.Items.attachSchema(cartItemSchema);

export default cartItems;
