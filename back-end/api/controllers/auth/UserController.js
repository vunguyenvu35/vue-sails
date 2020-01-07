/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let bcrypt = requires('bcryptjs');
let jwt = requires('jsonwebtoken');

module.exports = {
  login: async function (req, res) {
    const postData = req.body;

    let user = await Users.findOne({
      email: req.param('email')
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
};

