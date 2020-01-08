// api/services/user/CreateUser.js
module.exports = async (inputs) => {
  let username = inputs.username;
  let email = inputs.email;
  let password = inputs.password;

  let user = await sails.models.user.findOne({
    email: email
  });

  return 1;
};
