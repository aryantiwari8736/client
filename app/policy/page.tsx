"use client";

import Heading from "../utils/Heading";

import Policy from "./Policy";

type Props = {};

const Page = (props: Props) => {

  return (
    <div>
      <Heading
        title="SpringBee Policies - Transparency and Trust in IT Consultancy"
        description="Explore SpringBee's policies to understand how we prioritize transparency, security, and ethical conduct in our IT consultancy services. Learn about our privacy policy, terms of service, and commitment to data protection."
        keywords="Policies, privacy policy, terms of service, data protection, IT consultancy ethics, transparency, security, SpringBee commitment"
      />
     
      <Policy />
     
    </div>
  );
};

export default Page;
