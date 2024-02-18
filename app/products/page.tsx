"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetterProduct from "../components/Product/NewsLetterProduct";
import HeroProduct from "../components/Product/HeroProduct";


type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");

  return (
    <div className="">
      <Heading
        title="FAQ - Elearning"
        description="Elearning is a learning management system for helping programmers."
        keywords="programming,mern"
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
      <NewsLetterProduct/>
      <Footer />
    </div>
  );
};

export default Page;
