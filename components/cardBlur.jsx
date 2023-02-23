import { useRouter } from "next/router";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RxArrowRight, RxDoubleArrowRight } from "react-icons/rx";

export const CardBlur = () => {
  const router = useRouter();

  return (
    <>
      <div onClick={() => router.push("/wisata")}>
        <div className="rounded-md overflow-hidden relative bg-dark shadow-lg blur-sm">
          <img src="/images/wana-pramuka.jpg" alt="" />
        </div>
        <div className="z-30 top-0 w-full h-full space-x-3 flex justify-center items-center absolute">
          <a className="font-medium text-lg" href="/">
            Lebih Banyak
          </a>
          <RxDoubleArrowRight className="cursor-pointer" size={18} />
        </div>
      </div>
    </>
  );
};
