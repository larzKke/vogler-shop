Template.ProductList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('products');
  });
});

Template.ProductList.helpers({
    products: () => {
        return Products.find({});
    }
});

Template.Product.events({
	'click .add-item':function(event, template){
		event.preventDefault();

		//TODO - need to take an attribute hash and send in all values
		var item = this;
    item.amount = Number(template.find('.itemAmount').value);

    var productInCart = cartItems.findOne({productId: item._id});

    if (productInCart){
      Meteor.call('updateItemCart', item, productInCart, function(err,res){
        if (err) {
          console.log(err)
        } else {
          Bert.alert( 'Produkt wurde hinzugefügt!', 'success', 'fixed-top' );
          template.find('.itemAmount').value = 1;
        }
      });

    } else {

      Meteor.call('itemToCart', item, function(err, res){
        if (err) {
          console.log(err);
        } else {
            Bert.alert( 'Produkt wurde hinzugefügt!', 'success', 'fixed-top' );
            template.find('.itemAmount').value = 1;
        }
      });
    }
	}
});
