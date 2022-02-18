import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 left-0 bg-white z-50  h-20 border-b font-display flex items-center px-7 justify-between">
      <Image src="/assets/asset0.svg" width={102} height={40} alt="logo" />
      <div className="bg-gray-50 rounded-3xl flex items-center border-[1px] px-2 w-1/4 sticky top-0 left-0 overflow-hidden">
        <Image
          src="/assets/asset2.svg"
          alt="Search logo"
          width="24"
          height="18"
          className="w-5 h-5"
        />

        <input
          type="text"
          className="w-full h-12 bg-transparent focus:outline-none "
          placeholder="find (almost) anything"
        />
      </div>
      <ul className="flex space-x-7  text-[#4629d3] text-base font-medium">
        <li>
          <Link href="/">
            <a>Enterprise</a>
          </Link>
        </li>
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
        <a className="btn-header font-semibold">Login or Sign up</a>
      </Link>
      <Image src="/assets/asset5.svg" width={24} height={18} alt="menu" />
    </header>
  );
}

export default Header;
