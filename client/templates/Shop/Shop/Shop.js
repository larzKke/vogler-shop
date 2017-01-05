Template.ProductList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('products');
    self.subscribe('images');
  });
});

Template.ProductList.helpers({
    products() {
        return Products.find({});
    }
});

//Product
Template.Product.helpers({
    image() {
      return picture = Images.findOne({_id: this.picture}).link();
    }
});

Template.Product.onRendered(function(){
  this.$('.itemQuantity').dropdown();
});

Template.Product.events({
	'click .add-item':function(event, template){
		event.preventDefault();

		let item = this;
    let quantityInput = template.find('.itemQuantity')
    item.quantity =  Number(template.find('.itemQuantity select').value);

    Meteor.call('updateItemCart', item, function(err,res){
      if (err) {
        console.log(err);
        FlowRouter.go('login');
        Bert.alert( 'Sie müssen eingeloggt sein um Produkte in den Warenkorb zu legen!', 'danger', 'fixed-bottom' );
      }
      if (res) {
        Bert.alert( 'Produkt wurde hinzugefügt!', 'success', 'fixed-bottom' );
        $(quantityInput).dropdown('restore defaults');
      }
    });
	}
});
