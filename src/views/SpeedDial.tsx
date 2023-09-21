import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { AiFillFacebook } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import React from "react";
import { FaceBook, Instagram, Messenger, Twitter } from "./icons/icon";

const SpeedDialWithTextOutside = () => {
  return (
    <div className="fixed z-40 SpeedDialWithTextOutside">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full dark:bg-primary">
            <HiMail className="h-5 w-5 transition-transform group-hover:rotate-45 fill-white" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction className="relative">
            <Messenger />
            <Typography
              variant="small"
              color="white"
              className="absolute font-normal textStyle">
              Messenger
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="relative">
            <FaceBook />
            <Typography
              variant="small"
              color="white"
              className="absolute font-normal textStyle">
              FaceBook
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="relative">
            <Instagram />
            <Typography
              variant="small"
              color="white"
              className="absolute font-normal textStyle">
              Instagram
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="relative">
            <Twitter />
            <Typography
              variant="small"
              color="white"
              className="absolute font-normal textStyle">
              Twitter
            </Typography>
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
};

export default SpeedDialWithTextOutside;
