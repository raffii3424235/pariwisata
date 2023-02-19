import axios from "axios";
import { useFormik } from "formik";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const Admin = () => {
  const [items, setItems] = useState([]);

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
    <div>
      <h1 className="underline">ADMIN PAGE</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="border-2 border-black"
            type="text"
            name="title"
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input
            className="border-2 border-black"
            type="text"
            name="article"
            id="article"
            onChange={formik.handleChange}
            value={formik.values.article}
          />
          <button type="submit">Send Blogs</button>
        </form>
      </div>
      <div className="py-8">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <div className="space-y-4">
        {items.map((elm) => (
          <div
            className="bg-blue-600 rounded-md py-4 px-5 text-white"
            key={elm.id}
          >
            <h1>{elm.title}</h1>
            <p>{elm.article}</p>
            <button onClick={() => handleDelete(elm.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;

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
