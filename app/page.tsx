"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import Howwework from "./components/home/Howwework";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Welcome to SpringBee - Empowering Your Digital Journey"
        description="SpringBee is your partner in accelerating business growth through expert IT consultancy services. Explore our tailored solutions, meet our team of professionals, and discover how we can amplify your online potential."
        keywords=" IT consultancy, technology solutions, digital transformation, strategic planning, innovation, software development, web development, cloud computing, cybersecurity, data analytics, AI & machine learning, IoT, mobile app development, IT infrastructure, enterprise solutions, agile methodologies, customer experience, industry expertise, tailored solutions, expert guidance"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero setOpen={setOpen}/>
      <Howwework/>
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
