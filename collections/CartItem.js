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
    label: 'Menge',
    optional: true
  },
  weight: {
    type: Number,
    label: 'Gewicht',
    optional: true
  },
  userID: {
    type: String,
    label: 'User'
  }
});

export default cartItemSchema;
