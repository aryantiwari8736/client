"use client";
import React from "react";
import dynamic from "next/dynamic";
// const DynamicCourseDetailsPage = dynamic(()=> import("../../components/Course/CourseDetailsPage"),{
//   loading:()=><p>loading....</p>,
//   ssr:false
// })
import CourseDetailsPage from "@/app/components/Course/CourseDetailsPage";

const Page = ({ params }: any) => {
  return (
    <div>
      <CourseDetailsPage id={params.id} />
    </div>
  );
};

export default Page;
