const { connection } = require("../database/index.js");
const { DataTypes } = require("sequelize");

const Pet = connection.define(
  "pet",
  {
    name: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Pet;
