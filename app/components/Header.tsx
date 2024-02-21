"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Verification from "../components/Auth/Verification";
import Image from "next/image";
import avatar from "../../public/assests/avatar.png";
import { useSession } from "next-auth/react";
import { useLogOutQuery, useSocialAuthMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./Loader/Loader";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false);
 
  const {data:userData,isLoading,refetch} = useLoadUserQuery(undefined,{});
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogout] = useState(false);
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  useEffect(() => {
    if(!isLoading){
      if (!userData) {
        if (data) {
          socialAuth({
            email: data?.user?.email,
            name: data?.user?.name,
            avatar: data.user?.image,
          });
          refetch();
        }
      }
      if(data === null){
        if(isSuccess){
          toast.success("Login Successfully");
        }
      }
      if(data === null && !isLoading && !userData){
          setLogout(true);
      }
    }
  }, [data, userData,isLoading]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }


  return (
   <>
   {
    isLoading ? (
      <Loader />
    ) : (
      <div className="w-full relative ">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] md:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className={`text-[25px] flex gap-2 font-Poppins font-[500] text-black dark:text-white`}
              >
                 <Image width={50} height={50} alt="springbee -consultancy service logo" className="mb-1" src="/assests/springbeeIcon.png" />
               <div className="mb-0"></div> 
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={true} />
              
              <ThemeSwitcher />
              {/* only for mobile */}

              {userData ? (
                <Link href={"/profile"}>
                  <Image
                    src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] rounded-full cursor-pointer"
                    style={{border: activeItem === 5 ? "2px solid #37a39a" : "none"}}
                  />
                </Link>
              ) : (
                <HiOutlineUserCircle
                  size={25}
                  className=" md:block cursor-pointer dark:text-white text-black"
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

      </div>
      {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
              refetch={refetch}
            />
          )}
        </>
      )}

      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUp}
            />
          )}
        </>
      )}

      {route === "Verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )}
    </div>
    )
   }
   </>
  );
};

export default Header;
