'use client'
import React from "react";
import dynamic from "next/dynamic";
const DynamicCourseDetailsPage = dynamic(()=> import("../../components/Course/CourseDetailsPage"),{
  loading:()=><p>loading....</p>,
  ssr:false
})

const Page = ({params}:any) => {
    return (
        <div>
            <DynamicCourseDetailsPage id={params.id} />
        </div>
    )
}

export default Page;
 