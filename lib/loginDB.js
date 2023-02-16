const bcrypt = require("bcryptjs");
import { db } from "./db";

var sql = "SELECT * FROM users WHERE username = ?";
export const ldb = ({ username, password }) =>
  db.query(sql, [username], async function (err, results) {
    if (err) throw err;
    if (!results) {
      throw new Error("no data");
    }
    if (err) {
      throw new Error("no connect");
    }

    const checkPassword = await bcrypt.compare(password, results.password);
    if (!checkPassword || results.username !== username) {
      throw new Error("Username or Password does't match");
    }
    return { result: results };
  });
