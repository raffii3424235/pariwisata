import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Turn as Hamburger } from "hamburger-react";

export const Navbar = ({ onBg }) => {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }

  return (
    <>
      <div className="relative">
        <div
          className={
            onBg > 260
              ? "py-5 px-6 lg:px-12 flex justify-between items-center bg-dark shadow-lg shadow-black/30 duration-500 ease-linear"
              : "py-8 px-6 lg:px-12 flex justify-between items-center duration-500 ease-linear"
          }
        >
          <div>
            <h1>Banyumas</h1>
          </div>
          <div className="text-sm font-medium space-x-8 hidden lg:block">
            <Link
              className="hover:text-green duration-400 ease-linear"
              href="/"
            >
              Beranda
            </Link>
            <Link
              className="hover:text-green duration-400 ease-linear"
              href="/"
            >
              Wisata
            </Link>
            <Link
              className="hover:text-green duration-400 ease-linear"
              href="/"
            >
              Kuliner
            </Link>
            <Link
              className="hover:text-green duration-400 ease-linear"
              href="/"
            >
              Berita
            </Link>
            <Link
              className="hover:text-green duration-400 ease-linear"
              href="/"
            >
              Sejarah
            </Link>
          </div>
          <div className="block lg:hidden cursor-pointer">
            <Hamburger
              direction="left"
              toggle={setNav}
              toggled={nav}
              duration={0.8}
              size={18}
            />
          </div>
        </div>
      </div>
      {/* <div
        onClick={handleNav}
        className={
          nav
            ? "absolute z-40 w-full h-screen bg-dark/40 block top-0 duration-500 ease-linear"
            : "absolute z-40 w-full h-screen bg-dark/40 hidden top-0 duration-500 ease-linear"
        }
      ></div> */}
      <div
        className={
          nav
            ? "absolute z-50 w-64 h-screen bg-dark right-0 duration-500 ease-linear"
            : "absolute z-50 w-64 h-screen bg-dark -right-96 duration-500 ease-linear"
        }
      ></div>
    </>
  );
};
