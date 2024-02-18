"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
type Props = {
  setOpen: (open: boolean) => void;
};

const Hero: FC<Props> = ({ setOpen }) => {
  return (
    <>
      <header>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="flex max-w-2xl flex-col items-start">
              <h1 className="mb-4 text-3xl font-bold md:text-5xl text-[#002A5E] dark:text-white">
                Crafting Dream Projects, Lets Expand, Innovate, and Thrive
                Together
              </h1>
              <p className="mb-6 max-w-lg text-base text-[#636262] ">
              Unlock boundless growth potential by partnering with us to elevate your business to new heights and experience exponential business growth.
              </p>
              <div className="flex items-center my-4 gap-x-3">
                <Button className="bg-[#002A5E] dark:bg-white">Join Us</Button>
                <Button
                  onClick={() => setOpen(true)}
                  className="dark:bg-white bg-[#002A5E]"
                >
                  Book a Consultation
                </Button>
              </div>

              <div className="grid w-full grid-flow-row grid-cols-3 gap-4">
                <div>
                  <h3 className="text-2xl dark:text-white font-bold text-[#276ef1] md:mr-[10px] md:text-3xl">
                    <CountUp start={0} end={3000} duration={10} suffix="+" />
                  </h3>
                  <p className="text-sm dark:text-[#c4bebe] text-[#636262]">
                    Community
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl dark:text-white font-bold text-[#276ef1] md:text-3xl">
                    <CountUp start={0} end={500} duration={10} suffix="+" />
                  </h3>
                  <p className="text-sm dark:text-[#c4bebe] text-[#636262]">
                    Trainee
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl dark:text-white font-bold text-[#276ef1] md:text-3xl">
                    <CountUp start={0} end={50} duration={10} suffix="+" />
                  </h3>
                  <p className="text-sm dark:text-[#c4bebe] text-[#636262]">
                    Partners
                  </p>
                </div>
              </div>
            </div>

            <Image
              src={require("../../../public/assests/laptop.png")}
              alt=""
              className="object-cover w-full h-auto lg:w-auto lg:h-full"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
