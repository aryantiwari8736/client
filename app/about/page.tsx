"use client";
import Heading from "../utils/Heading";

import About from "./About";


type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Heading
        title="About SpringBee - Empowering Businesses through Premium Consultancy Services"
        description=" Learn about SpringBee, a leading IT consultancy firm dedicated to accelerating businesses through tailored digital strategies and expert guidance. Discover our mission, values, and the team behind our success."
        keywords="IT consultancy, digital strategies, expert guidance, business acceleration, premium services, SpringBee mission, SpringBee team"
      />
     
      <About />
   
    </div>
  );
};

export default Page;
