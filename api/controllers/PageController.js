/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  showPage: function(req, res) {

    //if not logged in, show login
    if(!req.session.me) {
      return res.view('login');
    }

    //otherwise look up user and show logged in view
    User.findOne(req.session.me, function(err, user) {
      if(err) {
        return res.negotiate(err);
      }
      if(!user) {
        sails.log.verbose('session refers to a user that no longer exists');
      }
      return res.view('dashboard', {
        me: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    });
  }
};

