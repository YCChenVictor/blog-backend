'use strict';

import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const user = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  }
})

export default user
