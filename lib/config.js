AccountsTemplates.configure({
  showLabels: false,
  forbidClientAccountCreation : true,
  showForgotPasswordLink: true,
  texts: {
    button: {
      signIn: "Login"
    },
    title: {
      signIn: ""
    }
  }
});

// AccountsTemplates.configure({
//     defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
//     defaultTemplate: 'myCustomFullPageAtForm',
//     defaultLayout: 'myLayout',
//     defaultLayoutRegions: {
//         nav: 'myNav',
//         footer: 'myFooter'
//     },
//     defaultContentRegion: 'main'
// });
//
// AccountsTemplates.configureRoute('signIn');
// AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('signIn', {
  path: '/login',
  layoutTemplate: 'ShopLayout',
  contentRegion: 'main'
});
