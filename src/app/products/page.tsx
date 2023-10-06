import Link from "next/link";
import React from "react";

type menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];


const menu = [
    {
      id: 1,
      slug: "homedecor",
      title: "HOME DECOR",
      desc: "Classic art ceramics for a timeless and elegant home decor.",
      img: "/m1.jpg",
      color: "#393646",
    },
    {
      id: 2,
      slug: "teaware",
      title: "TEAWARE",
      desc: "Timeless teaware ceramics for a touch of classic elegance in every sip.",
      img: "/m2.jpg",
      color: "#393646",
    },
    {
      id: 3,
      slug: "dinnerware",
      title: "DINNERWARE",
      desc: "Classic art dinnerware ceramics for an elegant dining experience every day.",
      img: "/m3.jpg",
      color: "#393646",
    },
  ];

const MenuPage = () => {
  return (
    <div className="p-4  lg:px-20 xl:px-40 h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
            href={`/products/${category.slug}`}
            key={category.id}
            className="w-full h-1/3 bg-cover p-8 md:h-1/2"
            style={{ backgroundImage: `url(${category.img})` }}
        >
            {/* text container */}
            <div className={`text-[${category.color}] flex flex-col justify-around  w-3/4 h-full items-start `}>
                <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
                <p className="text-sm my-8">{category.desc}</p>
                <button className={` hidden bg-[#393646] text-[#F4EEE0] 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "#393646"} py-2 px-4 rounded-md`}>Explore</button>
            </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;