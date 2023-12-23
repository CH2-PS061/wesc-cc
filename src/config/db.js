const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  timezone: "+07:00",
  dialectOptions: {
    //for reading from database
    dateStrings: true,
    typeCast(field, next) {
      // convert date time table to string
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
});

db.sync({ alter: true });

module.exports = db;
