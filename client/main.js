Meteor.startup(() => {


    Template.registerHelper('formatDate', function(date) {
      return moment(date).locale('de').format('LL');
    });

    AutoForm.setDefaultTemplate("semanticUI");

    AutoForm.addHooks(['updateProductForm','updateForwarderForm'], {
      onSuccess: function(operation, result, template) {
        Bert.alert( 'Änderung gespeichert!', 'success', 'fixed-bottom' );
        FlowRouter.go("/admin");
      }
    });
});
