import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src={"https://links.papareact.com/0fm"}
        alt={"Hero"}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <div className="text-sm sm:text-lg">
          Not sure where to get? Perfect.
        </div>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md font-bold my-3
         rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
