// api/services/user/CreateUser.js
let bcrypt = require('bcryptjs');

module.exports = async (inputs) => {
  let data = {
    email: inputs.email,
    username: inputs.username,
    password: await bcrypt.hash(inputs.password, 10),
  };
  return await sails.models.user.create(data)
    .intercept('E_UNIQUE', () => 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, () => 'invalid')
    .fetch();
};
