"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CorporateContact from "../components/Corporate/CorporateContact";
import CorporateHero from "../components/Corporate/CorporateHero";
import CorporateFacts from "../components/Corporate/CorporateFacts";


type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
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
      <CorporateHero/>
      <CorporateFacts/>
     <CorporateContact/>
      <Footer />
    </div>
  );
};

export default Page;
