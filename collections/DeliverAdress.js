DeliverAdressSchema = new SimpleSchema({
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
        label: 'PLZ',
        min: 1,
        max: 10
    },
    Ort: {
        type: String,
        label: 'Ort'
    },
});

DeliverAdressSchema.messages({required: "[label] bitte ausfüllen"});
DeliverAdressSchema.messages({maxNumber: "[label] darf nicht größer 10 sein"});
