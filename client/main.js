Meteor.startup(() => {


    Template.registerHelper('formatDate', function(date) {
      return moment(date).locale('de').format('LL');
    });

    AutoForm.setDefaultTemplate("semanticUI");

    AutoForm.addHooks(['updateProductForm'], {
      onSuccess: function(operation, result, template) {
        Bert.alert( 'Produkt gespeichert', 'success', 'fixed-bottom' );
        FlowRouter.go("/admin");
      }
    });
});
