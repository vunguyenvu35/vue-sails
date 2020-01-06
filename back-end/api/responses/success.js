/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.success();
 * return res.success(data);
 * return res.success(data, 'auth/login');
 *
 * @param  {Object} data
 * @param  {String|Object} options
 *          - pass string to render specified view
 */

module.exports = function success(data, options) {
  // Get access to `req` . `res`, & `sails`
  let req = this.req;
  let res = this.res;
  let sails = req._sails;

  sails.log.silly('res.success() :: Sending 200 ("OK") response');

  // set status code 200
  res.status(200);

  // If appropriate, serve data as JSON(P)
  // If views are disabled, revert to json
  if (req.wantsJSON || sails.config.hooks.views === false) {
    return res.jsonx(data);
  }

  // If second argument is a string, we take that to mean it refers to a view.
  // If it was omitted, use an empty object (`{}`)
  options = (typeof options === 'string') ? {view: options} : options || {};

  // Attempt to prettify data for views, if it's a non-error object
  var viewData = data;
  if (!(viewData instanceof Error) && 'object' === typeof viewData) {
    try {
      viewData = require('util').inspect(data, {depth: null});
    } catch (e) {
      viewData = undefined;
    }
  }

  // If a view was provided in options, serve it.
  // Otherwise try to guess an appropriate view, or if that doesn't
  // work, just send JSON.
  if (options.view) {
    return res.view(options.view, {data: viewData, title: 'OK'});
  } else {
    return res.guessView({data: viewData, title: 'OK'}, function couldNotGuessView() {
      return res.jsonx(data);
    });
  }

};
