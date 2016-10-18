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
  this.$('.itemAmount').dropdown();
});

Template.Product.events({
	'click .add-item':function(event, template){
		event.preventDefault();

    // template.find('.itemAmount').value = 1;

		//TODO - need to take an attribute hash and send in all values
		var item = this;
    var amountInput = template.find('.itemAmount')
    item.amount =  Number(template.find('.itemAmount select').value);
    var productInCart = cartItems.findOne({productId: item._id});

    if (productInCart){
      Meteor.call('updateItemCart', item, productInCart, function(err,res){
        if (err) {
          console.log(err)
        } else {
          Bert.alert( 'Produkt wurde hinzugefügt!', 'success', 'fixed-bottom' );
          $(amountInput).dropdown('restore defaults');
        }
      });

    } else {

      Meteor.call('itemToCart', item, function(err, res){
        if (err) {
          console.log(err);
        } else {
            Bert.alert( 'Produkt wurde hinzugefügt!', 'success', 'fixed-bottom' );
            $(amountInput).dropdown('restore defaults');
        }
      });
    }
	},
  'click .button': function(e, t) {
    console.log(t.Picture);
  }
});
