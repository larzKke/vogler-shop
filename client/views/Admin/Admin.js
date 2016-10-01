Template.Admin.onCreated(function () {
  this.autorun(() => {
    if (!Meteor.loggingIn() && !Meteor.user() === true ) {
      FlowRouter.go('login');
    }
    if (!Roles.userIsInRole( Meteor.userId(), 'admin' )) {
      Bert.alert( 'Sie müssen für diese Seite Admin sein!', 'danger', 'fixed-top' );
      FlowRouter.go('home');
    }
  });
});


Template.ProductListAdmin.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('products');
  });
});

Template.ProductListAdmin.helpers({
    products: () => {
        return Products.find({});
    }
});

Template.ProductListAdmin.events({
    'click .delete': function() {
        Products.remove({_id: this._id});
    }
})


// ProductSingle
Template.ProductSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('singleProduct', id);
  });
});

Template.ProductSingle.helpers({
    product: () => {
        var id = FlowRouter.getParam('id');
        return Products.findOne({ _id: id });
    }
});
