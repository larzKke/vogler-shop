// Template.Order.onCreated(function(){
//   var self = this;
//   self.autorun(function(){
//     self.subscribe('forwarders');
//   });
// });

Template.Order.helpers({
    Loading() {
      return Session.get('loading');
    },
    InvoiceAdressSchema() {
      return InvoiceAdressSchema
    },
    DeliverAdressSchema() {
      return DeliverAdressSchema
    }
});



Template.Order.events({
  'click .orderNow': function (event, template) {

    Session.set('loading', true);

    let deliverValid = AutoForm.validateForm('deliverAdress');
    let invoiceValid = AutoForm.validateForm('invoiceAdress');

    if (deliverValid && invoiceValid) {

      invoiceAdress = {};
      deliverAdress = {};

      $.each($('#invoiceAdress').serializeArray(), function() {
        invoiceAdress[this.name] = this.value;
      });

      $.each($('#deliverAdress').serializeArray(), function() {
        deliverAdress[this.name] = this.value;
      });

      Meteor.call('placeOrder', deliverAdress, invoiceAdress, function(err,res){
        if (err) {
          Bert.alert( 'Ein Fehler ist aufgetreten!', 'danger', 'fixed-bottom' );
        }
        if (res) {
          Session.set('Cart-itemTotal', 0);
          Session.set('Cart-itemCount', 0);
          Session.set('Cart-weightTotal', 0);
          Session.set('loading', false);
          FlowRouter.go('thanks');
        }
      });
    } else {
      Session.set('loading', false);
      Bert.alert( 'Bitte Adresse eingeben!', 'danger', 'fixed-bottom' );
    }

  }
})
