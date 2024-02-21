'use client'
import Loader from "@/app/components/Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const DynamicCourseContent = dynamic(()=> import("../../components/Course/CourseContent"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
type Props = {
    params:any;
}

const Page = ({params}: Props) => {
    const id = params.id;
  const { isLoading, error, data,refetch } = useLoadUserQuery(undefined, {});

  useEffect(() => {
    if (data) {
      const isPurchased = data.user.courses.find(
        (item: any) => item._id === id
      );
      if (!isPurchased) {
        redirect("/");
      }
    }
    if (error) {
      redirect("/");
    }
  }, [data,error]);

  return (
   <>
   {
    isLoading ? (
        <Loader />
    ) : (
        <div>
          <DynamicCourseContent id={id} user={data.user} />
        </div>
    )
   }
   </>
  )
}

export default Page