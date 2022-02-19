import Image from "next/image";
import React from "react";

const Input = () => {
  return (
    <div className="border space-x-1 rounded-full md:w-[650px] shadow-lg flex items-center p-1 px-3 md:py-2 bg-white">
      <div className="px-2 hidden md:inline-block">
        <Image
          src="/assets/asset2.svg"
          alt="Search logo"
          width={52}
          height="42"
        />
      </div>

      <input
        className="w-full outline-none "
        placeholder="bikes, drones, cameras"
      />
      <button className="bg-blue-800 px-8 py-2 md:py-3 rounded-3xl text-white text-lg hover:bg-blue-700 ease-in duration-150">
        Search
      </button>
    </div>
  );
};

export default Input;
