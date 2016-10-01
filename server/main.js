Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {

    var users = [
        {name:"kunde",email:"kunde",password:"kunde", roles:[]},
        {name:"vogler",email:"vogler", password:"vogler",roles:['admin']}
      ];

    _.each(users, function (user) {
      var id;

      id = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: { name: user.name }
      });

      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles);
      }

    });
   }
});
