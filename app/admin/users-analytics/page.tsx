'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../utils/Heading';
import DashboardHeader from '../../components/Admin/DashboardHeader';
import UserAnalytics from '../../../app/components/Admin/Analytics/UserAnalytics';
import dynamic from 'next/dynamic';
type Props = {}
const DynamicAdminSidebar = dynamic(()=> import("../../components/Admin/sidebar/AdminSidebar"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const DynamicDashboardHeader = dynamic(()=> import("../../components/Admin/DashboardHeader"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const DynamicUserAnalytics = dynamic(()=> import("../../../app/components/Admin/Analytics/UserAnalytics"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const page = (props: Props) => {
  return (
    <div>
        <Heading
          title="SpringBee Admin Panel - Manage Your Digital Strategy with Ease"
          description="Access the SpringBee Admin Panel to streamline your digital strategy management. Our intuitive interface empowers you to oversee projects, monitor analytics, and collaborate seamlessly with our expert team."
          keywords="Admin panel, digital strategy management, project oversight, analytics monitoring, collaboration platform, SpringBee tools"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <DynamicAdminSidebar />
            </div>
            <div className="w-[85%]">
               <DynamicDashboardHeader />
               <DynamicUserAnalytics />
            </div>
        </div>
    </div>
  )
}

export default page