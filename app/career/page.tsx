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
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen dark:bg-hsl-custom">
      <Heading
        title="Careers at SpringBee - Explore Opportunities in IT Consultancy and Tech Expertise"
        description="Dive into exciting career paths at SpringBee, where we offer opportunities for training, internships, and professional growth. Discover openings in our MERN and other tech stack teams, and become part of our dynamic IT consultancy firm."
        keywords=" Career opportunities, job openings, IT consultancy careers, SpringBee culture, join our team, IT professionals, career development, IT consultancy careers, career opportunities, job openings, training programs, internships, MERN stack, tech expertise, professional growth, IT professionals, SpringBee culture"
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
