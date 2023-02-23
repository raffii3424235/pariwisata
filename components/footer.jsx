import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-dark py-16 px-12 flex justify-center text-center">
      <div>
        <h1 className="text-2xl underline">Banyumas</h1>
        <div className="flex justify-center items-center py-6 space-x-5">
          <a href="">
            <FaTiktok size={22} />
          </a>
          <a href="">
            <FaInstagram size={24} />
          </a>
          <a href="">
            <FaYoutube size={24} />
          </a>
          <a href="">
            <FaTwitter size={24} />
          </a>
          <a href="">
            <FaFacebookF size={22} />
          </a>
        </div>
        <div className="flex items-center justify-center pt-2 text-sm font-medium">
          <a className="border-r-2 border-r-black px-3" href="/">
            Kebijakan Cookie
          </a>
          <a className="border-r-2 border-r-black px-3" href="/">
            Kebijakan Privasi
          </a>
          <a className="border-r-2 border-r-black px-3" href="/">
            Syarat dan Ketentuan
          </a>
          <a className="px-3" href="/">
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};
