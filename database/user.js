const knex = require("knex");

const pg = knex({
  client: "pg",
  connection: "postgres://postgres:pgadmin@localhost:5432/postgres",
});

const find = async function (data) {
  const users = await pg("users").where(data);
  console.log("🚀 ~ find ~ users:", users);
};

const get = async function (id) {
  const users = await pg("users").where({ id });
  console.log("🚀 ~ get ~ users:", users);
};

module.exports = { find, get };
