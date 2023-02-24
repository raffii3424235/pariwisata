import { db } from "@/lib/db";
const bcrypt = require("bcryptjs");

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have a data..." });
    const { username, password, role } = req.body;
    const passCrypt = bcrypt.hashSync(password, 12);

    db.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO users(username, password, role) VALUES ?";
      var values = [[username, passCrypt, role]];
      db.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });
  } else {
    res.status(500).json({ message: "HTTP method not valid" });
  }
}
