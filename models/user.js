'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const user = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING
  }
});

module.exports = user;
