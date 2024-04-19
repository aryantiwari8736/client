"use client";

import Heading from "../utils/Heading";

import NewsLetterProduct from "../components/Product/ProductNewsLetter";
import HeroProduct from "../components/Product/HeroProduct";
import ProductContact from "../components/Product/ProductContact";


type Props = {};

const Page = (props: Props) => {

  return (
    <div className="">
      <Heading
        title="Discover Our Innovative Solutions - SpringBee Product Offerings"
        description="Explore SpringBee's diverse range of innovative products designed to optimize your business operations and enhance your digital presence. From custom software solutions to cutting-edge digital tools, find the perfect product to propel your business forward."
        keywords="Products, software solutions, digital tools, business optimization, digital presence, innovation, SpringBee offerings"
      />
      
      <br />
      <HeroProduct/>
      
      
      <ProductContact/>
      <NewsLetterProduct/>
    
    </div>
  );
};

export default Page;
