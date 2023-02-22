import { useEffect, useState } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen mx-auto flex flex-col overflow-x-hidden">
        <div className="fixed top-0 z-20 w-full">
          <Navbar onBg={offset} />
        </div>
        <main className="flex-grow">{children}</main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
