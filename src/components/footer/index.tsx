import React from "react";
import Logo from "../Logo";
import { menuItems } from "@/modules/setting";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="container relative overflow-hidden mx-auto">
      <div className="h-auto  p-4 mb-4 md:mb-10 w-[100%] mx-auto flex item-center flex-col justify-center text-center">
        <div className="mx-auto mb-4 md:mb-10">
          <Logo />
        </div>
        <ul className="grid grid-cols-3  md:flex items-center justify-center gap-4 lg:gap-8 mb-4 md:mb-10 ">
          {menuItems &&
            menuItems.map((items, index) => {
              return (
                <li
                  className=" text-lg lg:text-2xl font-bold text-primary hover:text-white"
                  key={`${items.title}-${index}`}>
                  <Link href={items.href}>{items.title}</Link>
                </li>
              );
            })}
        </ul>
        <div className="w-[300px] mx-auto border-b-[1px] border-indigo-500 mb-4 md:mb-10"></div>
        <Typography variant="lead" className="text-md mb-2 md:text-xl ">
          feel free to contact us anytime, anywhere
        </Typography>
        <Typography variant="lead" className="text-md md:text-xl">
          © 2023 PHONG DANIEL , All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
