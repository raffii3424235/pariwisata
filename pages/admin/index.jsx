import authUser from "@/lib/authUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Admin = () => {
  const { userLogin } = authUser();
  const router = useRouter();
  useEffect(() => {
    if (userLogin === false) {
      router.push("/");
    }
  }, [userLogin]);

  return <div>Admin</div>;
};

export default Admin;
