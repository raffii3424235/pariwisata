import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require("bcryptjs");

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        var sql = "SELECT * FROM users WHERE username = ?";
        const mysql = require("mysql2/promise");
        const username = credentials.username;
        const password = credentials.password;

        const dbs = await mysql.createConnection({
          host: "localhost",
          user: "root",
          database: "belajar",
        });
        const [rows] = await dbs.execute(sql, [username]);
        const data = rows[0];

        const checkPassword = bcrypt.compareSync(password, data.password);
        if (!checkPassword) {
          throw new Error("Password does't match");
        } else if (data.username !== credentials.username) {
          throw new Error("Username does't match");
        }
        return data;
      },
    }),
  ],
});
