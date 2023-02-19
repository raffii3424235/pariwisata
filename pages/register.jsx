import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  function onSubmit(values) {
    axios
      .post("/api/signup", values)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>REGISTER</h2>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
