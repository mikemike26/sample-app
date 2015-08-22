/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  createUser: function(req, res) {
    User.create({
      firstName: req.body['firstName'],
      lastName: req.body['lastName'],
      gitHubId: req.body['gitHubId'],
      email: req.body['email']
    }).exec(function userCreated(err, newUser) {
      if(err) {
        res.negotiate(err);
      }
      return res.json({
        id: newUser.id
      });
    });
  },
  findUsers: function(req, res) {
    User.find().exec(function(err, users) {
      if(err) {
        res.negotiate(err);
      }
      return res.json(users);
    });
  },
  findOneUser: function(req, res) {
    User.findOne({
      id: req.params['id']
    }).exec(function(err, user) {
      if(err) {
        res.negotiate(err);
      }
      if(!user) {
        return res.notFound();
      }
      return res.json(user);
    });
  },
  editUser: function(req, res) {
    User.update({
      id: req.body['id']
    },{
      firstName: req.body['firstName'],
      lastName: req.body['lastName'],
      gitHubId: req.body['gitHubId'],
      email: req.body['email']
    }).exec(function(err, user) {
      if(err) {
        res.negotiate(err);
      }
      return res.json({
        id: user.id
      });
    });
  },
  deleteUser: function(req, res) {
    User.destroy({
      id: req.body['id']
    }).exec(function(err) {
      if(err) {
        res.negotiate(err);
      }
      return res.ok();
    });
  }
};
