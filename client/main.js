Meteor.startup(() => {
    AutoForm.setDefaultTemplate("semanticUI");

    AutoForm.addHooks(['updateProductForm'], {
      onSuccess: function(operation, result, template) {
        Bert.alert( 'Produkt gespeichert', 'success', 'fixed-top' );
        FlowRouter.go("/admin");
      }
    });
});
