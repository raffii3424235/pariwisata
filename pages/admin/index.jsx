import { getSession, signOut } from "next-auth/react";

const Admin = () => {
  function handleSignOut() {
    signOut();
  }

  return (
    <div>
      <h1>ADMIN PAGE</h1>
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
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
