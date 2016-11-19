DeliverAdressSchema = new SimpleSchema({
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
        // min: 1,
        // max: 10
    },
    city: {
        type: String,
        label: 'Ort'
    },
});

DeliverAdressSchema.messages({required: "[label] bitte ausfüllen"});
DeliverAdressSchema.messages({maxNumber: "[label] darf nicht größer 10 sein"});
