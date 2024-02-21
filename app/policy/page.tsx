"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Policy from "./Policy";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="SpringBee Policies - Transparency and Trust in IT Consultancy"
        description="Explore SpringBee's policies to understand how we prioritize transparency, security, and ethical conduct in our IT consultancy services. Learn about our privacy policy, terms of service, and commitment to data protection."
        keywords="Policies, privacy policy, terms of service, data protection, IT consultancy ethics, transparency, security, SpringBee commitment"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Policy />
      <Footer />
    </div>
  );
};

export default Page;
