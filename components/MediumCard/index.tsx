import React from "react";
import { LiveType } from "@/lib/type";
import Image from "next/image";

type Props = {
  item: LiveType;
};
const MediumCard = ({ item: { title, img } }: Props) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
          className={"rounded-lg"}
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
