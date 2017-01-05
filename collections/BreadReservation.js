BreadReservation = new Mongo.Collection('bread-reservation');

BreadReservation.allow({
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

BreadReservationSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    amount: {
        type: Number,
        label: 'Anzahl der Brötchen'
    },
    reservationFor: {
        type: Date,
        label: 'Tag der Abholung'
    },
    createdAt: {
      type: Date,
      autoform: {
        type: "hidden",
        label: false
      },
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

BreadReservation.attachSchema(BreadReservationSchema);
