"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/Footer";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="About SpringBee - Empowering Businesses through Premium Consultancy Services"
        description=" Learn about SpringBee, a leading IT consultancy firm dedicated to accelerating businesses through tailored digital strategies and expert guidance. Discover our mission, values, and the team behind our success."
        keywords="IT consultancy, digital strategies, expert guidance, business acceleration, premium services, SpringBee mission, SpringBee team"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
