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
        title="Your Submission Was Not Successfully Sent - SpringBee Consultancy"
        description=" We're sorry, but it seems like there was an issue with your submission. Please ensure all required fields are filled correctly and try again. If you continue to experience problems, feel free to reach out to us directly via phone or email. Thank you for your understanding."
        keywords="Submission error, form issue, contact problem, SpringBee assistance, IT consultancy support"
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
      <title>Form not Submitted SpringBee | SpringBee</title>
      <h2 className=" mx-auto max-w-screen-xl items-center text-center mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
            <span className="relative inline-block">
            
              <span className="relative">FORM<span className=''> NOT </span>SUBMITTED</span>
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
