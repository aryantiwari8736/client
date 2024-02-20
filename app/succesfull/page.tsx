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
        title="Thank You for Your Submission - SpringBee Consultancy"
        description=" Your form has been successfully submitted! We appreciate your interest in SpringBee's services. Our team will review your submission and get back to you as soon as possible. If you have any urgent inquiries, feel free to contact us directly. Thank you for choosing SpringBee!"
        keywords=" Form submission, successful submission, SpringBee services, inquiry received, thank you message"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <div className='mx-auto mt-20 max-w-screen-xl'>
      <title>Form Succesfully Submitted SpringBee | SpringBee</title>
      <h2 className=" mx-auto max-w-screen-xl items-center text-center mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
            <span className="relative inline-block">
            
              <span className="relative">FORM<span className=''> SUCCESFULLY </span>SUBMITTED</span>
            </span>{' '}
            <br />
            <br />
           <span className='text-blue-600'> </span>
          </h2>

          <div className='ml-[15vw] mr-[15vw] md:ml-[30%] md:mr-[30%] justify-center'>
       
          </div>
           </div>
      <Footer />
    </div>
  );
};

export default Page;
