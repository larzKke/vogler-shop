
Template.OpenAt.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('open-ats');
  });
});

Template.OpenAt.helpers({
  openAts() {
    return OpenAts.find({});
  }
})

Template.OpenAt.events({
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
