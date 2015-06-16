//usage:
//res.backToHomePage(); - default to 200 'ok' status code

module.exports = function backToHomePage(statusCode) {

  // Get access to `req`, `res``
  var req = this.req;
  var res = this.res;
  if(req.wantsJSON) {
    return res.send(statusCode || 200);
  }
  return res.redirect('/');
};

