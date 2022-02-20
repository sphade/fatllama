import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 left-0 bg-white z-50  h-16 md:h-20 border-b font-display flex items-center px-3 md:px-7 justify-between">
      <div className="hidden md:inline-block">
      <Image src="/assets/asset0.svg" width={102} height={40} alt="logo" />
      </div>
      <div className="inline-block md:hidden">
      
      <Image src="/assets/asset1.svg" width={75} height={25} alt="logo" />
      </div>
      <div className="bg-gray-50 w-3/4 hidden  lg:flex rounded-3xl  items-center border-[1px] px-2 md:w-1/4 sticky top-0 left-0 overflow-hidden">
        <Image
          src="/assets/asset2.svg"
          alt="Search logo"
          width="24"
          height="10"
          className="w-5 h-5"
        />

        <input
          type="text"
          className="w-full h-12 bg-transparent focus:outline-none "
          placeholder="find (almost) anything"
        />
      </div>
      <ul className="md:flex space-x-7 hidden  text-[#4629d3] text-base font-semibold">
        <li>
          <Link href="/">
            <a> How it works</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>List an item</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="border hidden lg:inline-block border-[#4629d3] font-medium px-10 text-[#4629d3] py-2 rounded-full">
          Give $20 Get $10{" "}
        </a>
      </Link>
      <div className="flex gap-5 items-center">
        <p className="text-base hidden md:inline-block text-[#111111]">Manny</p>
        <div className="rounded-full w-[45px] h-[45px] relative overflow-hidden border inline-block">
          <Image src="/assets/profile-llama-01.png" alt="hiscox" layout="fill" />
        </div>
      </div>

      <div className="hidden ">
        <Image src="/assets/asset5.svg" width={24} height={18} alt="menu" />
      </div>
    </header>
  );
}

export default Header;
