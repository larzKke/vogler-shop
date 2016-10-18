// Template.Order.onCreated(function(){
//   var self = this;
//   self.autorun(function(){
//     self.subscribe('cartItems');
//   });
// });

Template.Order.helpers({
    btnOff: () => {
      itemsInCart = Session.get('Cart-itemCount');
      if (itemsInCart == 0) {
        return false
      }
      return true
    },
    InvoiceAdressSchema: () => {
      return InvoiceAdressSchema
    },
    DeliverAdressSchema: () => {
      return DeliverAdressSchema
    }
});

Template.Order.events({
  'click .orderNow': function (event, template) {

    var deliverValid = AutoForm.validateForm('deliverAdress');
    var invoiceValid = AutoForm.validateForm('invoiceAdress');

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
        } else {
          console.log(res);
          FlowRouter.go('thanks');
        }
      });
    } else {
      Bert.alert( 'Bitte Adresse eingeben!', 'danger', 'fixed-bottom' );
    }

  }
})
