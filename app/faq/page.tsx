"use client";

import Heading from "../utils/Heading";

import FAQ from "../components/FAQ/FAQ";

type Props = {};

const Page = (props: Props) => {
 

  return (
    <div className="min-h-screen">
      <Heading
        title="Frequently Asked Questions - SpringBee IT Consultancy Answers"
        description=" Find answers to common queries about SpringBee's IT consultancy services, processes, and expertise. Browse our FAQ section to gain clarity on topics such as project management, pricing, and service offerings."
        keywords=" FAQ, frequently asked questions, IT consultancy, SpringBee services, project management, pricing, service offerings, consultancy expertise"
      />
      
      <br />
      <FAQ />
     
    </div>
  );
};

export default Page;
