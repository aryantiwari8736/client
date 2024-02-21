"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetterProduct from "../components/Product/ProductNewsLetter";
import HeroProduct from "../components/Product/HeroProduct";
import ProductContact from "../components/Product/ProductContact";


type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div className="">
      <Heading
        title="Discover Our Innovative Solutions - SpringBee Product Offerings"
        description="Explore SpringBee's diverse range of innovative products designed to optimize your business operations and enhance your digital presence. From custom software solutions to cutting-edge digital tools, find the perfect product to propel your business forward."
        keywords="Products, software solutions, digital tools, business optimization, digital presence, innovation, SpringBee offerings"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <HeroProduct/>
      
      
      <ProductContact/>
      <NewsLetterProduct/>
      <Footer />
    </div>
  );
};

export default Page;
