Meteor.startup(function() {

  process.env.MAIL_URL = "smtp://postmaster%40sandbox8c44419d3cab4c888c538b5aeeafeb53.mailgun.org:4348ec5b06e8b64d74a451d1d631579a@smtp.mailgun.org:587";

  if (Meteor.users.find().count() === 0) {

    var users = [
        {name:"kunde",email:"larz.knoke@gmail.com",password:"kunde", roles:[]},
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
