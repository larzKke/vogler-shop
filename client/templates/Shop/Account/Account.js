Template.Account.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('myOrders');
  });
});

Template.Account.helpers({
    orders() {
        return Orders.find({});
    }
});

Template.Account.events({
  'click .removeOrder': function(event) {
      event.preventDefault();
      let id = event.currentTarget.id;
      $('#orderNo' + id)
      // .modal('setting', 'closable', false)
      .modal('show');
    }
});

Template.confirmModal.events({
  'click .removeOrderConfirm': function(){
    let order = this;
    Meteor.call('removeOrder', order, function(err, res){
      if (err) {
        console.log(err);
        Bert.alert( err.reason, 'danger', 'fixed-bottom' );
      }
      if (res) {
        Bert.alert( 'Bestellung wurde erfolgreich storniert!', 'success', 'fixed-bottom' );
      }
    });
  }
});
