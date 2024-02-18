'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../../app/utils/Heading';
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';
import dynamic from 'next/dynamic';
const DynamicAdminSidebar = dynamic(()=> import("../../components/Admin/sidebar/AdminSidebar"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const DynamicDashboardHeader = dynamic(()=> import("../../../app/components/Admin/DashboardHeader"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const DynamicCourseAnalytics = dynamic(()=> import("../../components/Admin/Analytics/CourseAnalytics"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
         title="Elearning - Admin"
         description="ELearning is a platform for students to learn and get help from teachers"
         keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <DynamicAdminSidebar />
            </div>
            <div className="w-[85%]">
               <DynamicDashboardHeader />
               <DynamicCourseAnalytics />
            </div>
        </div>
    </div>
  )
}

export default page