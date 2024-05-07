const { Sequelize } = require("sequelize");

const connection = new Sequelize(process.env.DB_NAME, "juanan", "Puffin_88", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

async function checkConnection() {
  try {
    await connection.authenticate();
    console.log("Connection to DB succesful! :D");
  } catch (error) {
    console.log("Error connecting to databse D:");
    console.log(error);
  }
}

async function syncModels() {
  try {
    await connection.sync({alter: true})
    console.log('Models synched!!! :D')
  } catch (error) {
    console.log("Error synchronizing models D:");
    console.log(error);
  }
}

module.exports = {
  connection,
  checkConnection,
  syncModels
}
