import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit,
  });

  function validate(values) {
    const error = {};

    if (!values.username) {
      error.username = "Required";
    }

    if (!values.password) {
      error.password = "Required";
    }

    return error;
  }

  console.log(formik.errors);
  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
      callbackUrl: "/admin/",
    });
    if (status.ok) router.push(status.url);
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
