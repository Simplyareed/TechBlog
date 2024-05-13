const Sequelize = require('sequelize'); // brings in sequelize
require('dotenv').config(); //  data from .env

const sequelize = process.env.JAWSDB_URL 
  ? new Sequelize(process.env.JAWSDB_URL) 
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // This is for Local
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;