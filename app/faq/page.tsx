"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ/FAQ";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="Frequently Asked Questions - SpringBee IT Consultancy Answers"
        description=" Find answers to common queries about SpringBee's IT consultancy services, processes, and expertise. Browse our FAQ section to gain clarity on topics such as project management, pricing, and service offerings."
        keywords=" FAQ, frequently asked questions, IT consultancy, SpringBee services, project management, pricing, service offerings, consultancy expertise"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
