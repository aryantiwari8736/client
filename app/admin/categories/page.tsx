"use client";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";

import dynamic from "next/dynamic";
const DynamicAdminSidebar = dynamic(()=> import("../../components/Admin/sidebar/AdminSidebar"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const DynamicDashboardHero = dynamic(()=> import("../../components/Admin/DashboardHero"),{
  loading:()=><p>loading....</p>,
  ssr:false
})
const DynamicEditCategories = dynamic(()=> import("../../components/Admin/Customization/EditCategories"),{
  loading:()=><p>loading....</p>,
  ssr:false
})

type Props = {};

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
            <DynamicEditCategories />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
