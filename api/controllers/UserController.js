/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  signup: function(req, res) {
    var Passwords = require('machinepack-passwords');

    // Encrypt a string using the BCrypt algorithm.
    Passwords.encryptPassword({
      password: req.body['password'],
      difficulty: 10
    }).exec({
      // An unexpected error occurred.
      error: function (err){
        res.negotiate(err);
      },
      // OK.
      success: function (encryptedPassword){
        //console.log(req.body);
        User.create({
          name: req.body['name'],
          email: req.body['email'],
          password: encryptedPassword,
          lastLoggedIn: new Date()
        }, function userCreated(err, newUser) {
          if(err) {
            return res.negotiate(err);
          }
          return res.json({
            id: newUser.id
          });
        });
      }
    });
  },
  login: function(req, res) {
    var Passwords = require('machinepack-passwords');
    User.findOne({
      email: req.body['email']
    }, function foundUser(err, user) {
      if(err) {
        return res.negotiate(err);
      }
      if(!user) {
        return res.notFound();
      }

      Passwords.checkPassword({
        passwordAttempt: req.body['password'],
        encryptedPassword: user.password
      }).exec({
        // An unexpected error occurred.
        error: function (err){
          return res.negotiate(err);
        },
        // Password attempt does not match already-encrypted version
        incorrect: function (){
          return res.notFound();
        },
        // OK.
        success: function (){
          req.session.me = user.id;
          return res.ok();
        }
      });

    });
  }
};
