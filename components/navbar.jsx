import Link from "next/link";

export const Navbar = ({ onBg }) => {
  return (
    <div className="">
      <div
        className={
          onBg > 260
            ? "py-5 px-12 flex justify-between items-center bg-dark shadow-lg shadow-black/30 duration-300 ease-linear"
            : "py-8 px-12 flex justify-between items-center duration-300 ease-linear"
        }
      >
        <div>
          <h1>Banyumas</h1>
        </div>
        <div className="text-sm font-medium space-x-8">
          <Link className="hover:text-green duration-200 ease-linear" href="/">
            Beranda
          </Link>
          <Link className="hover:text-green duration-200 ease-linear" href="/">
            Wisata
          </Link>
          <Link className="hover:text-green duration-200 ease-linear" href="/">
            Kuliner
          </Link>
          <Link className="hover:text-green duration-200 ease-linear" href="/">
            Berita
          </Link>
          <Link className="hover:text-green duration-200 ease-linear" href="/">
            Sejarah
          </Link>
        </div>
      </div>
    </div>
  );
};
