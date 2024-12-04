const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("livestock", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.error("Unable to connect to database:", err));

module.exports = { sequelize };
