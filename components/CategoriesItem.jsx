import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoriesItem = ({ src, des, link }) => {
  return (
    <Link href={link}>
      <a className="shadow border rounded-2xl overflow-hidden flex flex-col ">
        <div className="h-[130px]   relative">
          <Image src={src} alt={src} layout="fill" objectFit="cover" />
        </div>
        <div className="h-[60px]  bg-white justify-center flex items-center">
          <p className=" text-sm px-4 tracking-widest text-gray-600 ">{des}</p>
        </div>
      </a>
    </Link>
  );
};

export default CategoriesItem;
