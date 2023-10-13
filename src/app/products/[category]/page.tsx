import { ProductType } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type homedeco = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
  }[];
const homedeco = [
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


const getData = async (category:string)=>{
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`,{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

type Props = {
  params:{category:string}
}

const CategoryPage = async({params}:Props) => {
  const products:ProductType[] = await getData(params.category)
  return (
    <div className="flex flex-wrap text-[#F4EEE0]">
      {products.map((item) => (
        <Link className=" bg-[#393646] w-full h-[60vh] border-r-2 border-b-2 border-[#6D5D6E] sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group " href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block  uppercase bg-[#F4EEE0] text-[#393646] p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;