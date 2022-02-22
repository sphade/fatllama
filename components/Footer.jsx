import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="bg-[#edf8f7] flex py-20 gap-10 md:gap-0 px-10 md:px-20 flex-col md:flex-row">
        <div className="flex-1 grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-y-5">
          <p className="font-bold text-[#030d54] text-sm capitalize">
            Tearms of service
          </p>
          <p className="font-bold text-[#030d54] text-sm capitalize">
            browse items
          </p>
          <p className="font-bold text-[#030d54] text-sm capitalize">
            how it works
          </p>
          <p className="font-bold text-[#030d54] text-sm capitalize">policy</p>
          <p className="font-bold text-[#030d54] text-sm capitalize">FAQs</p>
          <p className="font-bold text-[#030d54] text-sm capitalize">
            Guarantee
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex relative justify-between md:gap-5">
            <Image
              src="/assets/asset33.png"
              width={150}
              height={30}
              alt="assets/asset33.png"
            />
            <Image
              src="/assets/asset34.png"
              width={150}
              height={50}
              alt="assets/asset34.png"
            />
          </div>
          <div className="flex gap-5">
            <Image
              src="/assets/asset35.png"
              width={40}
              height={40}
              alt="assets/asset33.png"
            />
            <Image
              src="/assets/asset36.png"
              width={40}
              height={40}
              alt="assets/asset34.png"
            />
            <Image
              src="/assets/asset37.png"
              width={40}
              height={40}
              alt="assets/asset34.png"
            />
          </div>
        </div>
      </div>
      <div className="py-5">
        <p className="text-center">© Fat Llama Limited 2022</p>
      </div>
    </div>
  );
}

export default Footer;
