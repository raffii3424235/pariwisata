var sql = "SELECT * FROM users WHERE username = ?";

async function useGetDb({ username = "" }) {
  const mysql = require("mysql2/promise");

  const dbs = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "belajar",
  });
  const [rows, fields] = await dbs.execute(sql, [username]);

  if (!rows) {
    throw new Error("no data");
  }

  return {
    resData: rows,
  };
}
export default useGetDb;
