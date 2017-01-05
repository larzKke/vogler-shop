OpenAts = new Mongo.Collection('open-ats');

OpenAts.allow({
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

OpenAtSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Tag'
    },
    startTime: {
        type: String,
        label: 'Start',
        autoform: {
          afFieldInput: {
            type: "time"
          }
        }
    },
    endTime: {
        type: String,
        label: 'Ende',
        autoform: {
          afFieldInput: {
            type: "time"
          }
        }
    },
    special: {
      type: Boolean,
      label: 'Spezial',
      optional: true
    }
});

OpenAts.attachSchema(OpenAtSchema);
