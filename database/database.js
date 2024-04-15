const { Pool } = require("pg");
const knex = require("knex");

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   database: "postgres",
//   user: "postgres",
//   password: "pgadmin",
// });

const connection = knex({
  client: "pg",
  connection: "postgres://postgres:pgadmin@localhost:5432/postgres",
});

module.exports = connection;
