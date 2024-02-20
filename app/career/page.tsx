"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCareer from "../components/Career/HeroCareer";
import StepsCareer from "../components/Career/StepsCareer";


type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen dark:bg-hsl-custom">
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
      <div className="my-2"><HeroCareer/>
      <StepsCareer/></div>
      
      <Footer />
    </div>
  );
};

export default Page;
