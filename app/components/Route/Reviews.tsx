import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Sneha Patel",
    profession: " Entrepreneur",
    comment:
      "SpringBee's technical expertise and unwavering support have been instrumental in scaling my online startup. Their personalized approach and commitment to excellence make them an invaluable partner in the journey of entrepreneurship. With SpringBee by my side, I feel confident facing any digital challenge that comes my way",
  },
  {
    name: "Rajesh Sharma",
    profession: " Software Developer.",
    comment:
      "As a software developer, I rely on SpringBee for their top-notch technical support and innovative solutions. Their team's depth of knowledge and attention to detail consistently exceed my expectations, enabling me to deliver exceptional results for my clients. SpringBee has become an indispensable part of my toolkit, empowering me to stay ahead in a rapidly evolving digital landscape With SpringBee's comprehensive understanding of emerging technologies, I've been able to tackle complex development challenges with confidence. Their proactive approach to problem-solving and dedication to staying at the forefront of industry trends have helped me streamline my workflows and enhance my productivity.",
  },
  {
    name: "Neha Singh",
    profession: " Digital Marketer",
    comment:
      "SpringBee's consultancy services have been a game-changer for my digital marketing efforts. Their strategic insights and data-driven approach have helped me optimize campaigns and drive meaningful results. I highly recommend their services to fellow marketers. With SpringBee's guidance, I've been able to achieve ROI that exceeds industry standards",
  },
  {
    name: "Amit Patel",
    profession: " E-commerce Entrepreneu",
    comment:
      "SpringBee has been a trusted partner in my e-commerce journey. Their expertise in technical support and digital strategy has been instrumental in navigating the complexities of online retail. Thanks to their guidance, my business has experienced substantial growth.",
  },

  {
    name: "Priya Gupta",
    profession: "IT Professional",
    comment:
      "Working with SpringBee has been a refreshing experience. Their team's professionalism and dedication to client success are truly commendable. Whether it's troubleshooting technical issues or implementing new solutions, I can always rely on SpringBee to deliver exceptional results",
  },
  {
    name: "Shalni Singh",
    profession: "IT Professional",
    comment:
      "Working with SpringBee has been a refreshing experience. Their team's professionalism and dedication to client success are truly commendable. Whether it's troubleshooting technical issues or implementing new solutions, I can always rely on SpringBee to deliver exceptional results",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] md:w-[85%] m-auto">
      <div className="w-full md:flex items-center">
        <div className="md:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="md:w-[50%] w-full">
          <h3 className={`${styles.title} md:!text-[40px]`}>
            Discover Our Strength Through{" "}
            <span className="text-gradient"></span> <br />
            Client Testimonials...
          </h3>
          <br />
          <p className={styles.label}>
            Explore firsthand accounts of success and satisfaction from our
            valued clients. Gain insights into the impact of our services on
            businesses like yours. Let their experiences guide you in choosing
            the right partner for your digital journey
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
