import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  const items = [
    {
      src: "/assets/asset12.png",
      des: "flim & television",
    },
    {
      src: "/assets/asset12.png",
      des: "DJ equipment",
    },
    {
      src: "/assets/asset12.png",
      des: "Electronics",
    },
    {
      src: "/assets/asset12.png",
      des: "lens",
    },
    {
      src: "/assets/asset12.png",
      des: "flim & television",
    },
    {
      src: "/assets/asset12.png",
      des: "flim & television",
    },
    {
      src: "/assets/asset12.png",
      des: "flim & television",
    },
    {
      src: "/assets/asset12.png",
      des: "flim & television",
    },
    {
      src: "/assets/asset12.png",
      des: "flim & television",
    },
    {
      src: "/assets/asset12.png",
      des: "flim & television",
    },
  
  ];
  return (
    <div className="max-w-[1080px] w-full mx-auto md:px-0 px-5">
      <h3 className="text-4xl mb-[47px]">Explore our categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-11  items-center">
        {items.map(({ src, des }) => (
          <CategoriesItem src={src} des={des} key={src} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
