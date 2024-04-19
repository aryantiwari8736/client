"use client";

import Heading from "../utils/Heading";

import CorporateContact from "../components/Corporate/CorporateContact";
import CorporateHero from "../components/Corporate/CorporateHero";
import CorporateFacts from "../components/Corporate/CorporateFacts";


type Props = {};

const Page = (props: Props) => {


  return (
    <div className="min-h-screen">
      <Heading
        title="SpringBee Corporate Solutions - Elevate Your Business with Expert Consultancy"
        description=" Explore SpringBee's comprehensive range of corporate consultancy solutions designed to optimize business performance and drive growth. From digital strategy development to implementation and ongoing support, our team of experts is committed to partnering with your organization for success."
        keywords="Corporate consultancy, business optimization, growth strategy, digital transformation, expert guidance, business performance, SpringBee solutions, corporate partnership"
      />
     
      <br />
      <CorporateHero/>
      <CorporateFacts/>
     <CorporateContact/>

    </div>
  );
};

export default Page;
