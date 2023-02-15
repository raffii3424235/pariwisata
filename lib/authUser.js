import axios from "axios";
import { useState } from "react";

export default function authUser() {
  const [userLogin, setUserLogin] = useState(false);

  const signIn = (username, password) => {
    axios
      .get("/api/auth/")
      .then(function (response) {
        const data = response.data;
        const userTrue = [...data].find((elm) => elm.username === username);
        const passTrue = [...data].find((elm) => elm.password === password);
        if (userTrue && passTrue) {
          setUserLogin(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    userLogin,
    signIn,
  };
}
