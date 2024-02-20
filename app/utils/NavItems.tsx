import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Corporate",
    url: "/corporat",
  },
  {
    name: "Products",
    url: "/products",
  },
  {
    name: "Careers",
    url: "/career",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden md:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[#002A5E] "
                    : "dark:text-white text-black hover:text-[#002A5E]"
                } text-[18px] px-6 font-Poppins font-[400]`}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="md:hidden mt-5">
          <Sheet >
            <SheetTrigger className="mb-4 mr-2"> 
            <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white  text-black"
                /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-4">SpringBee</SheetTitle>
              </SheetHeader>
              <nav className="flex items-center justify-center flex-col gap-7">

              
              {navItemsData&&navItemsData.map((item,index)=>(
                <Link href={`${item.url}`} key={index} passHref>
                <span
                  className={`${
                    activeItem === index ? "text-[#003777]" : "tex-black"
                  } text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
              </Link>
              ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default NavItems;
