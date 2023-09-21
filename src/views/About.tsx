import {
  ReponsiveImageAuto,
  ReponsiveImageResize,
} from "@/components/ReponesiveImage";
import { Button, Chip, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto pt-[64px] pb-[64px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="relative flex items-center xl:items-start justify-end"
          data-aos="fade-right"
          data-aos-duration="1500">
          <div className="w-full p-4 rounded-lg overflow-hidden scale-x-[-1] relative z-10">
            <ReponsiveImageResize
              src={"/image/dev-6.png"}
              alt="/banner-dev"
              heightSize={"pt-[100%]"}
            />
          </div>
          <div className="hidden absolute bottom-0 left-0">
            <ReponsiveImageAuto
              src="/svg/effect-1.svg"
              alt="logo-dev-portfolio"
              width={500}
              height={500}
              classname="w-full h-full"
            />
          </div>
        </div>
        <div
          className=" p-4 lg:p-8 relative"
          data-aos="fade-left"
          data-aos-duration="2000">
          <div className="relative z-10">
            <Chip
              value="ABOUT US"
              className="bg-primary w-fit mb-5 font-bold text-lg"
            />
            <Typography
              variant="h1"
              className="text-4xl md:text-5xl style-text__gradient">
              Turning Vision Into Reality With Code And Design.
            </Typography>
            <Typography
              variant="paragraph"
              className="text-justify lg:text-start">
              Not only do we create great designs, but we also focus on building
              excellent user experiences. We understand that each project has
              its own requirements and specific goals. Therefore, we always
              listen and delve deeply into the ideas, desires and needs of our
              customers, thereby creating unique and suitable solutions.
            </Typography>
            <div className="mt-8 flex items-center gap-8">
              <ReponsiveImageAuto
                src="/svg/react.svg"
                alt="logo-dev-portfolio"
                width={80}
                height={80}
                classname="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]"
              />
              <ReponsiveImageAuto
                src="/svg/nextjs.svg"
                alt="logo-dev-portfolio"
                width={80}
                height={80}
                classname="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]"
              />
              <ReponsiveImageAuto
                src="/svg/vuejs.svg"
                alt="logo-dev-portfolio"
                width={80}
                height={80}
                classname="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]"
              />
              <ReponsiveImageAuto
                src="/svg/nodejs.svg"
                alt="logo-dev-portfolio"
                width={80}
                height={80}
              />
            </div>
            <Link href={"/about"}>
              <Button
                size="md"
                className="flex items-center gap-3 mt-8 buttonPrimary">
                GET IN TOUCH
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
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Button>
            </Link>
          </div>
          <div className="hidden md:block absolute top-[-40px]  right-0">
            <ReponsiveImageAuto
              src="/svg/effect-2.svg"
              alt="logo-dev-portfolio"
              width={200}
              height={200}
              classname="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
