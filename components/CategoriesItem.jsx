import React from "react";
import Image from "next/image";

const CategoriesItem = ({ src, des }) => {
  return (
    <div className="shadow border rounded-2xl overflow-hidden flex flex-col ">
      <div className="h-[130px]   relative">
        <Image src={src} alt={src} layout="fill" objectFit="cover" />
      </div>
      <div className="h-[60px]  bg-white justify-center flex items-center">
        <p className=" text-base px-4 tracking-widest text-gray-600 ">{des}</p>
      </div>
    </div>
  );
};

export default CategoriesItem;
