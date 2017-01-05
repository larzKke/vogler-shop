
Template.BreadReservationAdmin.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('bread-reservation');
  });
});

Template.BreadReservationAdmin.helpers({
  reservations() {
    return BreadReservation.find({});
  }
})

Template.BreadReservationAdmin.events({
    'click .removeOpenAt': function() {
      // let product = Products.remove({_id: this._id});
      let openAt = this;
      Meteor.call('removeOpenAt', openAt, function(err, res){
        if (err) {
          Bert.alert( 'Sie müssen Admin sein um Öffnungszeiten zu löschen!', 'danger', 'fixed-bottom' );
        }
        if (res) {
          console.log(res);
          Bert.alert( 'Öffnungszeit wurde erfolgreich entfernt!', 'success', 'fixed-bottom' );
        }

      });
    }
})
