'use strict';
  
import Sequelize from 'sequelize';
import sequelize from './index.js';
        
const user = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING
  }
})
        
export default user
