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
          <div className="flex px-5 md:px-5 lg:px-20 items-center justify-center">
            <div className="relative bg-[url('/assets/assetbg.svg')] mb-20 bg-no-repeat bg-bottom md:bg-right bg-[length:250px] sm:bg-[length:450px] md:bg-[length:650px] h-[650px] max-w-full w-full ">
              <h1 className="text-2xl md:text-7xl text-[#030d54] mb-5 font-bold mt-[75px]  max-w-xs md:max-w-xl w-full">
                Rent <span className="text-sky-600">Anything</span> from people
                in your area
              </h1>
              <p className="md:text-2xl text-[#979797] mb-[54px] font-thin max-w-lg">
                Borrow almost anything from people nearby for jobs at home, fun
                experiences or work.
              </p>
              <Input />
              <div className="absolute right-[550px] top-[370px]">
                <Image
                  src="/assets/larry-yellow-2.svg"
                  alt="hiscox"
                  width={116}
                  height={62}
                />
              </div>

              <div className="flex mt-10 items-center space-x-5">
                <span>or</span>
                <div className="btn-header inline-block">list an item</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              src="/assets/asset6.svg"
              alt="hiscox"
              width={160}
              height={100}
            />
          </div>
          <p className="text-gray-500 text-center">
            Our lender guarantee covers items up to £25,000, in partnership with
            Hiscox insurance
          </p>
          <p className="btn-header inline-block mt-5">learn more</p>
        </div>
        <div className="bg-[#f8f7fd] flex items-center justify-around flex-wrap py-10 mt-10 space-y-10 md:space-y-0">
        <div className="flex flex-col items-center space-y-2 ">
        <div>
          <Image
            src="/assets/asset6.svg"
            alt="hiscox"
            width={60}
            height={50}
          />
        </div>
        <h4 className="font-medium text-xl">Access More</h4>
        <p className="text-base text-gray-600">
          Pursue passions. Get things done.
        </p>
      </div>
          <div className="flex flex-col items-center space-y-2 ">
            <div>
              <Image
                src="/assets/asset6.svg"
                alt="hiscox"
                width={60}
                height={50}
              />
            </div>
            <h4 className="font-medium text-xl">Access More</h4>
            <p className="text-base text-gray-600">
              Pursue passions. Get things done.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 ">
            <div>
              <Image
                src="/assets/asset6.svg"
                alt="hiscox"
                width={60}
                height={50}
              />
            </div>
            <h4 className="font-medium text-xl">Access More</h4>
            <p className="text-base text-gray-600">
              Pursue passions. Get things done.
            </p>
          </div>
        </div>

        <div className="flex flex-col my-[75px] justify-center items-center ">
          <div className="max-w-6xl w-full   bg-[#eeeeee] md:rounded-3xl px-12 py-10 flex flex-col ">
            <h3 className="text-4xl mb-5 text-center md:text-left">
              Fat Llama Enterprise
            </h3>
            <div className="flex md:flex-row flex-col-reverse  justify-start md:justify-around">
              <div className="flex-1 space-y-5  flex flex-col items-center md:items-start">
                <p className="text-base text-[#767676]">
                  Retailers are joining the rental revolution too. Explore
                  Rental as a Service, our enterprise offering to help brands
                  and retailers launch their own rental services.
                </p>
                <button className="bg-blue-800 px-5 py-2 rounded-3xl text-white text-base hover:bg-blue-700 ease-in duration-150">
                  Learn More
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
        <div className="flex flex-col max-w-[1025px] space-y-20  w-full mx-auto mt-16 px-5">
          <div className="flex flex-col-reverse md:flex-row justify-center  space-y-10 md:space-y-0  items-center  ">
            <div className="flex-1">
              <h3 className="text-blue-500 text-3xl">
                Share your stuff, earn cash
              </h3>
              <p className="mt-5 ">
                Pay back your purchases by lending them to people in your area
                when you are not using them. Do it all worry free with verified
                borrowers and lender protection up to £25,000 per item.
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
              <h3 className="text-blue-500 text-3xl">
                Get access to (almost) anything
              </h3>
              <p className="mt-5 ">
                Why buy the things you'll only use a few times a month? When you
                can rent them for a fraction of the price? More money for you.
                Less waste for the planet.
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
      </main>
    </div>
  );
}
