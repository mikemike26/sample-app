/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
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
