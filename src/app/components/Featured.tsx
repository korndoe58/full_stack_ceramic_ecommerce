import Image from "next/image";
import React from "react";

type featuredProducts = [{
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  }];

const featuredProducts = [
    {
      id: 1,
      title: "Porcelain (white)",
      desc: "Embrace wisdom and prosperity with our Porcelain Ganesh. Meticulously crafted, it exudes spirituality and blessings. A divine piece for your space, inviting positivity and grace into your life.",
      img: "/p1.PNG",
      price: 249,
      
    },
    {
        id: 2,
        title: "Valuka (textured grey)",
        desc: "Experience tranquility with our Sand Texture Ceramics Ganesh. Intricately textured and spiritually crafted, it radiates serenity. A sacred piece, bringing peace and blessings to your space.",
        img: "/p2.PNG",
        price: 249,
        
    },
    { 
      id: 3,
      title: "Samritdech (black)",
      desc: "Discover elegance with our Matte Black Glaze Porcelain Ganesh. Expertly crafted, it blends modern aesthetics with spiritual essence. A symbol of grace, wisdom, and blessings in your sacred space.",
      img: "/p3.PNG",
      price: 249,
      
    },  
    {
      id: 4,
      title: "Rad Klao Yod",
      desc: "“Rad klao yod” translates to “Thai Headdress”. This is the first ceramic figurative sculpture from an upcoming series : contemporary humans adorned with Siraphon ornaments.",
      img: "/p4.PNG",
      price: 2999,
        
    },
    {
      id: 5,
      title: "Sang de boeuf vase",
      desc: "Adorn your space with our Sang de Boeuf Glaze Ceramics Vase. Capturing the essence of nature, its deep red hues and organic form exude elegance. A timeless piece for sophisticated interior decor.",
      img: "/p5.png",
      price: 149,
        
    },  
  
  
  ];

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-[#F4EEE0] bg-black">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-[#393646] transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full ">
                <Image src={item.img} alt="" fill className="object-contain" sizes="(max-width: 768px) 100vw"/>
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-[#6D5D6E] text-[#F4EEE0] p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;