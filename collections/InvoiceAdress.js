InvoiceAdressSchema = new SimpleSchema({
    FirstName: {
        type: String,
        label: 'Vorname'
    },
    LastName: {
        type: String,
        label: 'Nachname'
    },
    StreetNo: {
        type: String,
        label: 'Straße + Nr.'
    },
    Plz: {
        type: Number,
        label: 'PLZ'
    },
    Ort: {
        type: String,
        label: 'Ort'
    },
});

InvoiceAdressSchema.messages({required: "[label] bitte ausfüllen"});
