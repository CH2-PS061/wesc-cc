const dbPool = require("../config/database");

const getAllUser = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name,email,address) VALUES ('${body.name}','${body.email}','${body.address}')`;
  return dbPool.execute(SQLQuery);
};

const updateUser = (body, id) => {
  const SQLQuery = `UPDATE users SET name='${body.name}',email='${body.email}',address='${body.address}' WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};
module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
