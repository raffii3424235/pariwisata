import useGetDb from "@/hooks/useGetDb";
import { db } from "@/lib/db";
var sql = "SELECT * FROM users WHERE username = ?";

export default async function handler(req, res) {
  const mysql = require("mysql2/promise");

  const dbs = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "belajar",
  });
  const [rows] = await dbs.execute(sql, ["raffi"]);

  res.status(200).json(...rows);
}
