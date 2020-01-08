/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let Emailaddresses = require('machinepack-emailaddresses');

module.exports = {
  login: async function (req, res) {

    let email = req.param('email');

    if (!email) return res.notFound();

    let user = await sails.models.user.findOne({
      email: email
    });

    if (!user) return res.notFound();


    await bcrypt.compare(req.param('password'), user.password);

    let token = jwt.sign({user: user.id}, sails.config.jwtSecret, {expiresIn: sails.config.jwtExpires});

    // provide the token to the client in case they want to store it locally to use in the header (eg mobile/desktop apps)0
    res.success({
      signed: true,
      domain: 'webapp.com', // always use this in production to whitelist your domain
      maxAge: sails.config.jwtExpires,
      token: token
    });
  },

  register: function (req, res) {
    let email = req.param('email');
    let username = req.param('username');
    let password = req.param('password');

    if (_.isUndefined(email)) {
      return res.badRequest('An email address is required.');
    }

    if (_.isUndefined(password)) {
      return res.badRequest('A password is required.');
    }

    Emailaddresses.validate({
      string: email
    }).exec({
      error: (error) => {
        return res.serverError(error);
      },
      invalid: () => {
        return res.badRequest('Doesn\'t look like an email address.');
      },
      success: async () => {
        let param = req.allParams();
        UserService.createUser(param).then(response => {
          res.success({
            user: response
          });
        });
      }
    });
  },

  logout: function (req, res) {
    req.user = null;
    return res.ok();
  }


};

