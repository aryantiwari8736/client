"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact/Contact";


type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="Get in Touch with SpringBee - Reach Out for Expert IT Consultancy Services"
        description=" Contact SpringBee for personalized IT consultancy services tailored to accelerate your business. Whether you have questions, need assistance, or want to discuss a project, our team is here to help. Reach out to us via phone, email, or the contact form below."
        keywords=" Contact SpringBee, IT consultancy services, get in touch, business acceleration, contact us, IT experts, phone, email, contact form"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Page;
