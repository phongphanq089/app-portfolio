import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import React from "react";

import { useState, useEffect } from "react";
import ListMenuItems from "./ListMenuItems";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../Logo";
import MenuSlider from "./MenuSlider";
import ToogleDarkLight from "./ToogleDarkLight";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const openDrawer = () => setOpenNav(true);

  const closeDrawer = () => setOpenNav(false);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <React.Fragment>
      <Navbar
        className={`mx-auto max-w-full backdrop-saturate-100 fixed top-0 left-0 z-40 shadow-none  backdrop-blur-none bg-opacity-20 w-full py-2 px-4 lg:px-8 lg:py-4 rounded-none dark:bg-transparent border-0${
          sticky
            ? " !z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-30"
            : ""
        }`}>
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden xl:block">
            <ListMenuItems />
          </div>
          <div className="hidden xl:flex items-center gap-6">
            <div>
              <ToogleDarkLight />
            </div>
            <Button size="md" className="flex items-center gap-3 buttonPrimary">
              Download Remuse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </Button>
          </div>
          <div className="flex items-center gap-5 xl:hidden">
            <div>
              <ToogleDarkLight />
            </div>
            <Button
              className="ml-auto border border-primary rounded-full w-14 h-14 text-inherit p-0  flex items-center justify-center dark:bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent "
              onClick={openDrawer}>
              <HiMenuAlt3 size={30} color="aqua" />
            </Button>
          </div>
        </div>
      </Navbar>
      <MenuSlider open={openNav} closeDrawer={closeDrawer} />
    </React.Fragment>
  );
};

export default Header;
