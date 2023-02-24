import axios from "axios";
import { useFormik } from "formik";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { Sidenav } from "@/widgets/layout";

const Dashboard = (session) => {
  const [items, setItems] = useState([]);
  const dataUser = session.session;

  // GET INPUT FORMIK
  const formik = useFormik({
    initialValues: {
      title: "",
      article: "",
    },
    onSubmit,
  });

  // POST TO DB
  function onSubmit(values) {
    axios
      .post("/api/blogs/blog", values)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  // LOGOUT
  function handleSignOut() {
    signOut();
  }

  // DELETE FROM DB
  function handleDelete(uid) {
    console.log(uid);
    axios
      .delete("/api/blogs/blog", { data: { id: `${uid}` } })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  // GET FROM DB
  useEffect(() => {
    axios
      .get("/api/blogs/blog")
      .then(function (response) {
        const data = response.data;
        setItems(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      <div>
        <Sidenav />
      </div>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
