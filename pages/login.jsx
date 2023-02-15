import { async } from "@firebase/util";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
    const status = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
      callbackUrl: "/",
    });
    console.log(status);
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
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
