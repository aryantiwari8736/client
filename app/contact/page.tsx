"use client";

import Heading from "../utils/Heading";

import Contact from "../components/Contact/Contact";


type Props = {};

const Page = (props: Props) => {


  return (
    <div className="min-h-screen">
      <Heading
        title="Get in Touch with SpringBee - Reach Out for Expert IT Consultancy Services"
        description=" Contact SpringBee for personalized IT consultancy services tailored to accelerate your business. Whether you have questions, need assistance, or want to discuss a project, our team is here to help. Reach out to us via phone, email, or the contact form below."
        keywords=" Contact SpringBee, IT consultancy services, get in touch, business acceleration, contact us, IT experts, phone, email, contact form"
      />
   
      <br />
      <Contact/>
   
    </div>
  );
};

export default Page;
