import Image from "next/image";
import React from "react";

const AsSeenIn = () => {
  return (
    <div className="my-12 space-y-10 flex flex-col justify-center items-center">
      <p className="text-gray-400">As seen in</p>
      <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-24">
        <Image
          src="/assets/tech-crunch-logo.png"
          alt="hiscox"
          width={70}
          height={60}
          objectFit="contain"
        />
        <Image
          src="/assets/times-logo.png"
          alt="hiscox"
          width={130}
          height={60}
          objectFit="contain"
        />{" "}
        <Image
          src="/assets/forbes-logo.png"
          alt="hiscox"
          width={130}
          height={60}
          objectFit="contain"
        />
        <Image
          src="/assets/bbc-news-logo.png"
          alt="hiscox"
          width={70}
          height={60}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default AsSeenIn;
