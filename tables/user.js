const connection = require("../database/database");

const find = async function (data) {
  const users = await connection("users").where(data);
  console.log("🚀 ~ find ~ users:", users);
};

const get = async function (id) {
  const users = await connection("users").where({ id });
  console.log("🚀 ~ get ~ users:", users);
};

module.exports = { find, get };
