Meteor.startup(() => {
    AutoForm.setDefaultTemplate("semanticUI");

    AutoForm.addHooks(['updateProductForm'], {
      onSuccess: function(operation, result, template) {
        Bert.alert( 'Produkt gespeichert', 'success', 'fixed-bottom' );
        FlowRouter.go("/admin");
      }
    });
});
