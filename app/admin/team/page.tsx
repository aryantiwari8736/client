"use client";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import AllUsers from "../../components/Admin/Users/AllUsers";

import dynamic from 'next/dynamic';
type Props = {}
const DynamicAdminSidebar = dynamic(()=> import("../../components/Admin/sidebar/AdminSidebar"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const DynamicDashboardHero = dynamic(()=> import("../../components/Admin/DashboardHero"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const DynamicAllUsers = dynamic(()=> import("../../components/Admin/Users/AllUsers"),{
  loading:()=><p>loading....</p>,
  ssr:false
})

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
      <Heading
          title="SpringBee Admin Panel - Manage Your Digital Strategy with Ease"
          description="Access the SpringBee Admin Panel to streamline your digital strategy management. Our intuitive interface empowers you to oversee projects, monitor analytics, and collaborate seamlessly with our expert team."
          keywords="Admin panel, digital strategy management, project oversight, analytics monitoring, collaboration platform, SpringBee tools"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <DynamicAdminSidebar />
          </div>
          <div className="w-[85%]">
            <DynamicDashboardHero />
            <DynamicAllUsers isTeam={true} />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
