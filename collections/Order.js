import '/collections/DeliverAdress.js';
import '/collections/InvoiceAdress.js';
import '/collections/CartItem.js';

Orders = new Mongo.Collection('orders');

Orders.allow({
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

OrderSchema = new SimpleSchema({
    deliverAdress: {
      type: DeliverAdressSchema
    },
    invoiceAdress: {
      type: InvoiceAdressSchema
    },
    products: {
      type: [cartItemSchema]
    },
    userID: {
      type: String,
      label: 'UserID'
    },
    orderNo: {
      type: Number,
      label: 'Bestell-Nr.'
    },
    total: {
      type: Number,
      label: 'Summe',
      decimal: true
    },
    date: {
      type: Date,
      autoValue: function() {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date()};
        } else {
          this.unset();  // Prevent user from supplying their own value
        }
    }
  }
});

Orders.attachSchema(OrderSchema);
