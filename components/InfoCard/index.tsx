import React from "react";
import { ResultType } from "@/lib/type";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

type Props = {
  item: ResultType;
};
const InfoSearch = ({
  item: { title, img, lat, long, price, star, total, location, description },
}: Props) => {
  return (
    <div
      className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 pr-4 hover:shadow-lg transition duration-200 ease-out
    first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className={"rounded-lg"}
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold lg:text-2xl pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSearch;
