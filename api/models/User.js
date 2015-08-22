/**
* User.js
*
* @description :: Users model, for adding and removing users to our db
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      size: 15,
      primaryKey: true
    },
    firstName: {
      type: 'string',
      size: 25,
      required: true
    },
    lastName: {
      type: 'string',
      size: 25,
      required: true
    },
    gitHubId: {
      type: 'string',
      size: 50,
      required: true
    },
    email: {
      type: 'string',
      size: 100,
      required: true
    }
  }
};
