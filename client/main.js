Meteor.startup(() => {
    // BlazeLayout.setRoot('body');  //set new ROOT for BlazeLayout

    Template.registerHelper('formatDate', function(date) {
      return moment(date).locale('de').format('LL');
    });

    Template.registerHelper('formatDate2', function(date, format) { 
      return moment(date).format(format);
    });

    AutoForm.setDefaultTemplate("semanticUI");

    AutoForm.addHooks(['updateProductForm','updateForwarderForm'], {
      onSuccess: function(operation, result, template) {
        Bert.alert( 'Änderung gespeichert!', 'success', 'fixed-bottom' );
        FlowRouter.go("/admin");
      }
    });

    AutoForm.addHooks(['insertForwarderForm','insertProductForm'], {
      onSuccess: function(operation, result, template) {
        Bert.alert( 'Produkt/Versandart angelegt!', 'success', 'fixed-bottom' );
        FlowRouter.go("/admin");
      }
    });
});
