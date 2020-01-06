/**
 * isAuthenticated
 *
 */
var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('AUTH0_CLIENT_SECRET', 'base64'),
  audience: 'AUTH0_CLIENT_ID'
});

module.exports = authCheck;
