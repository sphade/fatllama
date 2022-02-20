/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import AsSeenIn from "../components/AsSeenIn";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Input from "../components/Input";
import Reviews from "../components/Reviews";
import RotatingText from "../components/RotatingText";

export default function Home() {
  const rotatingtxt = [
    "cameras",
    "scooters",
    "DJ sets",
    "bikes",
    "tools",
    "consoles",
    "anything",
  ];
  return (
    <div className="font-display tracking-wider">
      <Head>
        <title>Fat Llama | Rent (almost) anything</title>
        <meta
          name="description"
          content="Fat Llama is the trusted marketplace for renting almost anything. Rent out your stuff to earn extra money or rent from others to save, experience more and help the planet."
        />
        <link rel="icon" href="/assets/asset31.png" />
      </Head>
      <Header />
      <main className="pb-48">
        <div className="flex flex-col">
          <div className="flex    bg-[url('/assets/assetbg.svg')] mb-20 bg-no-repeat bg-[center_bottom] md:bg-right bg-[length:95%] md:bg-[length:650px] h-[650px] md:h-[650px] max-w-7xl border mx-auto w-full">
            <div className="pl-10 pr-3 lg:pl-20  relative ">
              <h1 className=" text-4xl  md:text-7xl text-[#030d54] mb-5 font-black mt-[50px] md:mt-[75px] max-w-xs  md:max-w-xl w-full">
                <span className="block">
                  Rent <span className="text-sky-600">anything</span>
                </span>{" "}
                <span className="block">from people in</span>
                your area
              </h1>
              <p className="md:text-2xl text-[#808080] mb-[54px] font-thin max-w-lg">
                Borrow almost anything from people nearby for jobs at home, fun
                experiences or work.
              </p>
              <Input />
              <div className="absolute right-[100px] top-[370px] hidden md:block">
                <Image
                  src="/assets/larry-yellow-2.svg"
                  alt="hiscox"
                  width={116}
                  height={62}
                />
              </div>

              <div className="flex   mt-10 items-center space-x-5 ">
                <span>or</span>
                <div className="btn-header inline-block">list an item</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-8 justify-center items-center">
          <div>
            <Image
              src="/assets/asset6.svg"
              alt="hiscox"
              width={160}
              height={50}
            />
          </div>
          <p className="text-gray-500 text-center">
            Our lender guarantee covers items up to £25,000, in partnership with
            Hiscox insurance
          </p>
          <p className="btn-header inline-block ">learn more</p>
        </div>
        <div className="bg-[#f8f7fd] flex items-center justify-around flex-wrap py-10 mt-10 space-y-10 md:space-y-0">
          <div className="flex flex-col items-center space-y-2 ">
            <div>
              <Image
                src="/assets/asset7.svg"
                alt="hiscox"
                width={60}
                height={50}
              />
            </div>
            <h4 className="font-medium text-xl">Access More</h4>
            <p className="text-base font-thin text-[#767676]">
              Pursue passions. Get things done.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 ">
            <div>
              <Image
                src="/assets/asset8.svg"
                alt="hiscox"
                width={60}
                height={50}
              />
            </div>
            <h4 className="font-medium text-xl">Save money</h4>
            <p className="text-base font-thin text-[#767676]">
              Buy less. Rent for a fraction of the cost.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 ">
            <div>
              <Image
                src="/assets/asset9.svg"
                alt="hiscox"
                width={60}
                height={50}
              />
            </div>
            <h4 className="font-medium text-xl">Help the planet</h4>
            <p className="text-base font-thin text-[#767676]">
              Live lighter. Reduce waste.
            </p>
          </div>
        </div>

        <div className="flex flex-col my-[75px] justify-center items-center ">
          <div className="max-w-5xl w-full   bg-[#eeeeee] md:rounded-3xl  px-8 md:px-12 py-10 flex flex-col ">
            <h3 className="text-3xl mb-5 text-[#030d54] font-semibold text-center md:text-left">
              Fat Llama Enterprise
            </h3>
            <div className="flex md:flex-row flex-col-reverse  justify-start md:justify-around">
              <div className="flex-1 space-y-5  flex flex-col items-center md:items-start">
                <p className="text-base text-[#767676]">
                  Retailers are joining the rental revolution too. Explore
                  Rental as a Service, our enterprise offering to help brands
                  and retailers launch their own rental services.
                </p>
                <button className="bg-blue-800 px-7 py-2 rounded-3xl text-white text-base hover:bg-blue-700 ease-in duration-150">
                  Learn more
                </button>
              </div>
              <div className="mb-10  flex flex-1 items-center justify-around">
                <div className="">
                  <Image
                    src="/assets/asset10.svg"
                    alt="hiscox"
                    width={132}
                    height={101}
                  />
                </div>
                <div className="">
                  <Image
                    src="/assets/asset11.svg"
                    alt="hiscox"
                    width={132}
                    height={101}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Categories />
        <AsSeenIn />
        <div className="relative bg-[url('/assets/download.svg')] bg-no-repeat bg-center md:h-[750px] bg-[length:200%,120%] md:bg-[length:100%,100%]  flex justify-center space-x-10 items-center py-10 px-5">
          <div className="w-1/2 ">
            <Image
              src="/assets/asset22.png"
              alt="hiscox"
              width={500}
              height={501}
              objectFit="contain"
            />
          </div>
          <div className="w-[450px]">
            <h3 className="text-white text-3xl">Access anything on the go</h3>
            <p className="mt-5 text-white">
              Message and rent at the tap of a button. The Fat Llama app is the
              easiest way to find what you need, manage your rentals and
              purchases and get instant updates. Get it now on iOS and Android.
            </p>
            <div className="flex items-center space-x-10 mt-5">
              <div className="bg-gray-50 rounded-3xl flex items-center border-[1px] px-2  sticky top-0 left-0 overflow-hidden">
                <input
                  type="text"
                  className="w-full h-12 bg-transparent focus:outline-none "
                  placeholder="find (almost) anything"
                />
              </div>
              <button className="bg-blue-800 px-10 py-2 rounded-3xl text-white text-base hover:bg-blue-700 ease-in duration-150">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[1025px] px-10 md:px-5 space-y-20  w-full mx-auto mt-16 ">
          <div className="flex flex-col-reverse md:flex-row justify-center  space-y-10 md:space-y-0  items-center  ">
            <div className="flex-1">
              <h3 className="text-[#030d54] md:font-bold font-semibold mt-10 md:mt-0 text-2xl md:text-3xl">
                Share your stuff, earn cash
              </h3>
              <p className="mt-5 space-y-10 text-[#111111] font-thin">
                <span className="block">
                  Pay back your purchases by lending them to people in your area
                  when you're not using them.
                </span>
                <span className="block">
                  Do it all worry free with verified borrowers and lender
                  protection up to £25,000 per item.
                </span>
              </p>
              <div className="flex items-center space-x-10 mt-5">
                <button className="bg-blue-800 px-10 py-2 rounded-3xl text-white text-base hover:bg-blue-700 ease-in duration-150">
                  Start Earning
                </button>
              </div>
            </div>
            <div className="flex-1 relative flex justify-center ">
              <Image
                src="/assets/asset 26.png"
                alt="hiscox"
                width={302}
                height={570}
              />
            </div>
          </div>

          <div className="flex md:flex-row justify-center flex-col space-y-10 md:space-y-0  items-center  ">
            <div className="flex-1 relative flex justify-center ">
              <Image
                src="/assets/asset 27.png"
                alt="hiscox"
                width={302}
                height={570}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[#030d54]  md:font-bold font-semibold  text-2xl md:text-3xl">
                Get access to (almost) anything
              </h3>
              <p className="mt-5 space-y-10 text-[#111111] font-thin">
                <span className="block">
                  Why buy the things you’ll only use a few times a month? When
                  you can rent them for a fraction of the price?{" "}
                </span>
                <span className="block">
                  More money for you. Less waste for the planet.{" "}
                </span>
              </p>
              <div className="flex items-center space-x-10 mt-5">
                <button className="bg-blue-800 px-10 py-2 rounded-3xl text-white text-base hover:bg-blue-700 ease-in duration-150">
                  Start Earning
                </button>
              </div>
            </div>
          </div>
        </div>
        <Reviews />
        <div className="bg-[#2ccbbb] flex  items-center">
          <div>
          <h2>Top searches</h2>
            <div className="flex gap-10">
              <div>
                <h1 className="font-bold text-base text-[#ffffffb4] mb-3">LONDON</h1>
                <div className="text-base text-white space-y-1">
                
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                <p>av Equipment</p>
                </div>
              </div>
              <div>
              <h1>LONDON</h1>
              </div>
              <div>
              <h1>LONDON</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
