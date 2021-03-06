import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  const items = [
    {
      src: "/assets/asset12.png",
      des: "flim & television",
      link:'/lp/flim&television'
    },
    {
      src: "/assets/asset13.jpeg",
      des: "DJ equipment",
      link:'/lp/flim&television'

    },
    {
      src: "/assets/asset14.png",
      des: "Electronics",
      link:'/lp/flim&television'

    },
    {
      src: "/assets/asset15.png",
      des: "lens",
      link:`/lp/lens`

    },
    {
      src: "/assets/asset16.png",
      des: "flim & television",
      link:`/lp/lens`

    },
    {
      src: "/assets/asset17.jpeg",
      des: "flim & television",
      link:`/lp/lens`

    },
    {
      src: "/assets/asset18.png",
      des: "flim & television",
      link:`/lp/lens`

    },
    {
      src: "/assets/asset19.png",
      des: "flim & television",
      link:`/lp/lens`

    },
    {
      src: "/assets/asset20.jpeg",
      des: "flim & television",
      link:`/lp/lens`

    },
    {
      src: "/assets/asset21.jpeg",
      des: "flim & television",
      link:`/lp/lens`

    },
  
  ];
  return (
    <div className="max-w-[1080px] w-full mx-auto md:px-0 px-5">
      <h3 className="text-2xl md:text-4xl mb-[47px] font-semibold">Explore our categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-11  items-center">
        {items.map(({ src, des, link }) => (
          <CategoriesItem src={src} link={link} des={des} key={src} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
