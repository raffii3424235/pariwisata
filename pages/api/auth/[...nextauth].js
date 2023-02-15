import { db } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require("bcryptjs");

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const username = credentials.username;
        var sql = "SELECT * FROM users WHERE username = ?";
        const [err, results, fields] = db.execute(sql, [username]);
        if (!results) {
          throw new Error("no data");
        }
        if (err) {
          throw new Error("no connect");
        }

        // const checkPassword = await bcrypt.compare(
        //   credentials.password,
        //   resData.password
        // );
        if (
          results.password !== credentials.password ||
          results.username !== credentials.username
        ) {
          throw new Error("Username or Password does't match");
        }

        return resData;
      },
    }),
  ],
});
