export default async function handler(req, res) {
  const mysql = require("mysql2/promise");

  // CONNECT TO DB MYSQL
  const dbs = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "belajar",
  });

  switch (req.method) {
    case "GET":
      var sqlg = "SELECT * FROM blogs";

      const [rows] = await dbs.execute(sqlg);

      res.status(200).json(rows);
      break;
    case "POST":
      const { title, article } = req.body;
      const values = [[title, article]];
      var sqlp = "INSERT INTO `blogs`(`title`, `article`) VALUES ?";
      const [results] = await dbs.query(sqlp, [values]);

      res.status(200).json(results);
      break;
    case "DELETE":
      const { id } = req.body;
      const valuesId = [id].toString();
      var sqld = `DELETE FROM blogs WHERE id = ${id}`;
      const [resDelete] = await dbs.query(sqld);

      res.status(200).json(resDelete);

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
