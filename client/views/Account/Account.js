Template.Account.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('myOrders');
  });
});

Template.Account.helpers({
    orders: () => {
        return Orders.find({});
    }
});
