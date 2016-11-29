Forwarders = new Mongo.Collection('forwarders');

Forwarders.allow({
    insert: function() {
        return isAdmin();
    },
    update: function() {
        return isAdmin();
    },
    remove: function() {
        return isAdmin();
    }
});

ForwarderSchema = new SimpleSchema({
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
    minWeight: {
        type: Number,
        decimal: true,
        label: 'Min. Gewicht'
    },
    maxWeight: {
        type: Number,
        decimal: true,
        label: 'Max. Gewicht'
    }
});

Forwarders.attachSchema(ForwarderSchema);

export default ForwarderSchema
