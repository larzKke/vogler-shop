Products = new Mongo.Collection('products');

Products.allow({
    insert: function() {
        return true
    },
    update: function() {
        return true
    },
    remove: function() {
        return true
    }
});

ProductSchema = new SimpleSchema({
    artikelNr: {
        type: String,
        label: 'Artikel-Nr.'
    },
    name: {
        type: String,
        label: 'Name'
    },
    desc: {
        type: String,
        label: 'Beschreibung'
    },
    price: {
        type: Number,
        decimal: true,
        label: 'Preis'
    },
    image: {
        type: String,
        label: 'Bild'
    }
});

Products.attachSchema(ProductSchema);
