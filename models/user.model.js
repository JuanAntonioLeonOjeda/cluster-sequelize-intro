const { connection } = require('../database/index.js')
const { DataTypes } = require('sequelize')

const User = connection.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  age: {
    type: DataTypes.INTEGER
  },
  role: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'user'
  }
}, {
  timestamps: true
})

module.exports = User