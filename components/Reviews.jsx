import Image from "next/image";
import React from "react";

const Reviews = () => {
  const item = [
    {
      name: "",
      pic: "",
      quote: "",
      star: 5,
      town: "",
    },
  ];
  return (
    <div className="mt-24">
      <div className="flex space-x-20    justify-center ">
        <div className="  ">
          <Image
            src="/assets/fat-llama-plants-001.svg"
            alt="hiscox"
            width={450}
            height={100}
          />
        </div>

        <div className="  ">
          <Image
            src="/assets/fat-llama-larrys-running.svg"
            alt="hiscox"
            width={250}
            height={100}
          />
        </div>
      </div>
      <div className=" relative  py-32 flex items-center flex-col  bg-green-800 ">
        <h3 className="text-3xl  text-white">Recent rental reviews</h3>
        <div className="gap-20 mt-10 max-w-[1096px] w-full grid md:grid-cols-2  grid-cols-1 px-5 ">
          <div className="bg-white px-10 p-10 rounded-xl space-y-5">
            <p>
              "This is my second rental with Antonio - great equipment, great
              price and brilliant service!"
            </p>
            <div className="flex items-center space-x-5">
              <div className="rounded-full w-[50px] h-[50px] relative overflow-hidden border inline-block">
                <Image src="/assets/Adam.jpg" alt="hiscox" layout="fill" />
              </div>
              <div>
                <p>Rosheela, London</p>
                <div>{}</div>
              </div>
            </div>
          </div>
          <div className="bg-white px-10 p-10 rounded-xl space-y-5">
            <p>
              "This is my second rental with Antonio - great equipment, great
              price and brilliant service!"
            </p>
            <div className="flex items-center space-x-5">
              <div className="rounded-full w-[50px] h-[50px] relative overflow-hidden border inline-block">
                <Image src="/assets/Adam.jpg" alt="hiscox" layout="fill" />
              </div>
              <div>
                <p>Rosheela, London</p>
                <div>{}</div>
              </div>
            </div>
          </div>
          <div className="bg-white px-10 p-10 rounded-xl space-y-5">
            <p>
              "This is my second rental with Antonio - great equipment, great
              price and brilliant service!"
            </p>
            <div className="flex items-center space-x-5">
              <div className="rounded-full w-[50px] h-[50px] relative overflow-hidden border inline-block">
                <Image src="/assets/Adam.jpg" alt="hiscox" layout="fill" />
              </div>
              <div>
                <p>Rosheela, London</p>
                <div>{}</div>
              </div>
            </div>
          </div>
          <div className="bg-white px-10 p-10 rounded-xl space-y-5">
            <p>
              "This is my second rental with Antonio - great equipment, great
              price and brilliant service!"
            </p>
            <div className="flex items-center space-x-5">
              <div className="rounded-full w-[50px] h-[50px] relative overflow-hidden border inline-block">
                <Image src="/assets/Adam.jpg" alt="hiscox" layout="fill" />
              </div>
              <div>
                <p>Rosheela, London</p>
                <div>{}</div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-header mt-10">browse items</button>
      </div>
    </div>
  );
};

export default Reviews;
