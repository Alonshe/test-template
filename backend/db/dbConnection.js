//Todo: Don't forget to download the .env file!

const {Sequelize} = require('sequelize')
require('dotenv').config()

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: "mysql"
})

