import { useFormik } from "formik";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaUser, FaKey } from "react-icons/fa";

const Login = (session) => {
  const [showErr, setShowErr] = useState(false);
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

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
      callbackUrl: "/dashboard/",
    });

    if (status.ok) {
      router.push(status.url);
    } else {
      setShowErr(true);
    }
    setTimeout(() => {
      setShowErr(false);
    }, 7000);
  }

  return (
    <div className="h-screen relative overflow-y-hidden bg-semi_dark">
      <div className="absolute w-full top-1/2 m-0 -translate-y-1/2 flex justify-center">
        <div className="py-12 px-10 bg-dark rounded-md shadow-xl">
          <div className="text-center mb-10">
            <h1 className="font-bold text-2xl">Dashboard Login</h1>
            <p className="text-sm text-gray-300">Login ke dashboard</p>
          </div>
          <div>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div className="flex items-center space-x-2">
                <FaUser color="#68FE9A" />
                <input
                  className="bg-transparent focus:outline-none border-b-2 border-gray-700 text-sm py-1 w-64"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  autoComplete="off"
                />
              </div>
              <div className="flex items-center space-x-2">
                <FaKey color="#68FE9A" />
                <input
                  className="bg-transparent focus:outline-none border-b-2 border-gray-700 text-sm py-1 w-64"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              {showErr ? (
                <>
                  <span className="text-red-500 text-xs">
                    Cek kembali Username dan Password
                  </span>
                </>
              ) : (
                <></>
              )}
              <div className="pt-4">
                <div className="flex justify-center bg-green">
                  <button
                    className="w-full text-black font-medium py-2 text-base"
                    type="submit"
                  >
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/dashboard/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
