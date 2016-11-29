// Template.ForwarderList.onRendered(function(){
//   console.log('Test');
//   this.$('.ui.radio.checkbox').checkbox();
//   this.$('.ui.radio.checkbox').checkbox('setting', 'onChange', function () {
//     alert('fire!');
// });
// });

Template.ForwarderList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('forwarders');
  });
});

Template.ForwarderList.helpers({
    Loading() {
      return Session.get('loading');
    },
    forwarders() {
      let weightTotal = Session.get('Cart-weightTotal');
      let forwarders = Forwarders.find({
          minWeight: { $lte: weightTotal },
          maxWeight: { $gte: weightTotal }
      });
      return forwarders;
    }
});

Template.ForwarderList.events({
  'click .procced': function(event, template) {

    let forwarderOption = template.find('input:radio[name=forwarder]:checked');

    if (forwarderOption) {
        let cart = Carts.findOne({});
        let forwarderID = forwarderOption.value;
        let forwarder = Forwarders.findOne({_id: forwarderID});

        Carts.update({_id: cart._id},{$set: {forwarder:forwarder}}, function(err, res){
          if (err) console.log(err);
          if (res) FlowRouter.go('order');
        });

    } else {
        Bert.alert( 'Bitte wählen Sie eine Versandart aus!', 'danger', 'fixed-bottom' );
    }

  }
})
