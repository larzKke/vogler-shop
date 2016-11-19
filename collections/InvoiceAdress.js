InvoiceAdressSchema = new SimpleSchema({
    firstName: {
        type: String,
        label: 'Vorname'
    },
    lastName: {
        type: String,
        label: 'Nachname'
    },
    streetNo: {
        type: String,
        label: 'Straße + Nr.'
    },
    plz: {
        type: Number,
        label: 'PLZ'
    },
    city: {
        type: String,
        label: 'Ort'
    },
});

InvoiceAdressSchema.messages({required: "[label] bitte ausfüllen"});
