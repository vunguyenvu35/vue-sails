/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');


module.exports = {
  login: async function (req, res) {

    let email = req.param('email');

    if(!email) return res.notFound();

    let user = await sails.models.user.findOne({
      email: email
    });

    if(!user) return res.notFound();


    await bcrypt.compare(req.param('password'), user.password);

    let token = jwt.sign({user: user.id}, sails.config.jwtSecret, {expiresIn: sails.config.jwtExpires});

    res.cookie('sailsjwt', token, {
      signed: true,
      domain: 'webapp.com', // always use this in production to whitelist your domain
      maxAge: sails.config.jwtExpires
    });

    // provide the token to the client in case they want to store it locally to use in the header (eg mobile/desktop apps)
    res.success(token);
  },

  signIn: async function(req, res){
    let email = req.param('email');
    let username = req.param('username');
    let password = req.param('password');

    
  }

};

