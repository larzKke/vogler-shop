Template.ProductList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('products');
    self.subscribe('images');
  });
});

Template.ProductList.helpers({
    products: () => {
        return Products.find({});
    }
});

//Product
Template.Product.helpers({
    image: function() {
      return picture = Images.findOne({_id: this.picture}).link();
    }
});

Template.Product.onRendered(function(){
  this.$('.itemQuantity').dropdown();
});

Template.Product.events({
	'click .add-item':function(event, template){
		event.preventDefault();

    // template.find('.itemQuantity').value = 1;

		//TODO - need to take an attribute hash and send in all values
		let item = this;
    let quantityInput = template.find('.itemQuantity')
    item.quantity =  Number(template.find('.itemQuantity select').value);
    let productInCart = cartItems.findOne({productID: item._id});

    if (productInCart){
      Meteor.call('updateItemCart', item, productInCart, function(err,res){
        if (err) {
          console.log(err)
          FlowRouter.go('login');
          Bert.alert( 'Sie müssen eingeloggt sein um Produkte in den Warenkorb zu legen!', 'danger', 'fixed-bottom' );
        }
        if (res) {
          Bert.alert( 'Produkt wurde hinzugefügt!', 'success', 'fixed-bottom' );
          $(quantityInput).dropdown('restore defaults');
        }
      });

    } else {

      Meteor.call('itemToCart', item, function(err, res){
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
	}
});
