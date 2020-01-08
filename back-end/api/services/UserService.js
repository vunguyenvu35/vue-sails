// api/services/UserServices.js
let CreateUser = require('./user/CreateUser.js');

module.exports = {
  createUser: async (inputs) => {
    let result = await CreateUser(inputs).then(response => {
      return response;
    });
    return result;
  },
  updateUser: async (data) => {

  },
};
