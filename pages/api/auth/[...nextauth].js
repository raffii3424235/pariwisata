import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require("bcryptjs");

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        var sql = "SELECT * FROM users WHERE name = ?";
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
        const user = { id: data.id, name: data.name, role: data.role };

        const checkPassword = bcrypt.compareSync(password, data.password);
        if (!checkPassword || data.name !== credentials.username) {
          throw new Error("Username or Password does't match");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      var sql = "SELECT * FROM users WHERE name = ?";
      const mysql = require("mysql2/promise");
      const username = session.user.name;

      const dbs = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "belajar",
      });
      const [rows] = await dbs.execute(sql, [username]);
      const data = rows[0];

      if (session.user) {
        session.user.role = data.role;
      }

      return session;
    },
  },
});
