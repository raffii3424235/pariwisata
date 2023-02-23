import { useRouter } from "next/router";

export const Card = ({ title, img, url }) => {
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.push("/wisata")}>
        <div className="rounded-md relative overflow-hidden bg-dark shadow-lg">
          <img src={img} alt="card" />
        </div>
        <div className="z-30 bottom-5 w-full h-full space-x-3 duration-300 ease-linear flex justify-center text-center px-2 items-end absolute">
          <div className="font-medium text-xl md:text-base lg:text-lg">
            {title}
          </div>
        </div>
      </div>
    </>
  );
};
