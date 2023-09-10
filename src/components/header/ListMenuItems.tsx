import { menuItems } from "@/modules/setting";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ListMenuItems = () => {
  const router = useRouter();

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      {menuItems &&
        menuItems.map((item, index) => {
          return (
            <Typography
              as="li"
              variant="h6"
              color="blue-gray"
              className="p-1 font-normal relative group"
              key={`list-${item.title}-${index}`}>
              <Link
                href={item.href}
                className={`flex items-center uppercase hover:text-primary hover:dark:text-primary ${
                  router.asPath === item.href
                    ? "text-primary"
                    : "dark:text-white"
                }`}>
                {item.title}
                <span
                  className={`absolute left-0 bottom-[-2px] inline-block h-[1px] bg-primary dark:bg-primary group-hover:w-full transition-[width] ease duration-700 ${
                    router.asPath === item.href ? "w-full" : "w-0"
                  }`}></span>
              </Link>
            </Typography>
          );
        })}
    </ul>
  );
};

export default ListMenuItems;
