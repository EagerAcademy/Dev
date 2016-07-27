// import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    console.log("Meteor Startup Functions Initializing");
    console.log("Any Existing Users: " + Meteor.users.find());
    if (!Meteor.users.find()) {
        var users = [
            {name: "Admin User", username: "admin", roles: ['admin']},
            {name: "Employee User", username: "employee", roles: ['employee']},
            {name: "Supplier User", username: "supplier", roles: ['supplier']}
        ];
        _.each(users, function (user) {
            if (user.username == "admin") {
                var id = Accounts.createUser({
                    username: user.username,
                    password: "tlsms",
                    profile: {name: user.name}
                });
                if (user.roles.length > 0) {
                    // Need _id of existing user record so this call must come
                    // after `Accounts.createUser` or `Accounts.onCreate`
                    Roles.addUsersToRoles(id, user.roles, Roles.GLOBAL_GROUP);
                }
            }
            else if (user.username == "employee") {
                var id = Accounts.createUser({
                    username: user.username,
                    password: "tlemployee",
                    profile: {name: user.name}
                });
                if (user.roles.length > 0) {
                    // Need _id of existing user record so this call must come
                    // after `Accounts.createUser` or `Accounts.onCreate`
                    Roles.addUsersToRoles(id, user.roles);
                }
            }
            else if (user.username == "supplier") {
                var id = Accounts.createUser({
                    username: user.username,
                    password: "apple1",
                    profile: {name: user.name}
                });
                if (user.roles.length > 0) {
                    // Need _id of existing user record so this call must come
                    // after `Accounts.createUser` or `Accounts.onCreate`
                    Roles.addUsersToRoles(id, user.roles);
                }
            }
        });
    }
    // console.log(Meteor.users.find(_id));
    console.log("Finished Adding User Accounts");
});
