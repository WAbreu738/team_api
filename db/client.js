const { Sequelize } = require('sequelize');

const client = new Sequelize(
    'teams_db',
    'postgres',
    'pass',
    {
      host: 'localhost',
      dialect: 'postgres',
      // logging: false
    })

module.exports = client