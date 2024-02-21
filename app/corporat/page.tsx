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
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="SpringBee Corporate Solutions - Elevate Your Business with Expert Consultancy"
        description=" Explore SpringBee's comprehensive range of corporate consultancy solutions designed to optimize business performance and drive growth. From digital strategy development to implementation and ongoing support, our team of experts is committed to partnering with your organization for success."
        keywords="Corporate consultancy, business optimization, growth strategy, digital transformation, expert guidance, business performance, SpringBee solutions, corporate partnership"
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
