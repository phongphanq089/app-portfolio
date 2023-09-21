import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import Logo from "../Logo";
import Link from "next/link";
import { menuItems } from "@/modules/setting";

interface Props {
  open: boolean;
  closeDrawer: any;
}

const MenuSlider = ({ open, closeDrawer }: Props) => {
  return (
    <React.Fragment>
      <Drawer open={open} onClose={closeDrawer} placement="right">
        <div className="mb-2 flex items-center justify-between p-4">
          <div className="flex items-center">
            <Logo />
          </div>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="px-4">
          <Typography color="gray" className="mb-3 font-normal">
            Material Tailwind features multiple React and HTML components, all
            written with Tailwind CSS classes and Material Design guidelines.
          </Typography>
        </div>
        <List>
          {menuItems &&
            menuItems.map((items, index) => {
              return (
                <Link href={items.href} key={`${items}-${index}-mobiles`}>
                  <ListItem>
                    <ListItemPrefix>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </ListItemPrefix>
                    {items.title}
                  </ListItem>
                </Link>
              );
            })}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuSlider;
