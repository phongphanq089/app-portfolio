import {
  ReponsiveImageAuto,
  ReponsiveImageResize,
} from "@/components/ReponesiveImage";
import { Chip, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import Typical from "react-typical";
import RenderSvg from "./RenderSvg";
import SliderSvg from "./SliderSvg";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative z-10  pt-[120px] md:pt-[170px]   wrapper-banner">
      <div className="container mx-auto px-4 ">
        <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 ">
          <div
            className="wrap-text__about"
            data-aos="fade-right"
            data-aos-duration="2000">
            <Chip
              value="PHONG DANIEL"
              className="bg-primary w-fit mb-5 text-lg"
            />
            <div>
              <Typical
                loop={Infinity}
                wrapper="h1"
                steps={[
                  " HEY! I’M PHONG DANIEL 💞️",
                  2000,
                  "Full stack Developer 💻",
                  2000,
                ]}
              />
            </div>
            <Typography
              variant="h1"
              className="text-4xl md:text-5xl style-text__gradient">
              Web Developer & Growth Consultant
            </Typography>

            <Typography
              variant="paragraph"
              className="text-justify lg:text-start">
              We are proud to present to you a diverse and innovative collection
              in the field of design and development. Our portfolio is a diverse
              collection of projects, from sharp and attractive graphic designs,
              to beautiful and easy-to-use websites, along with unique mobile
              applications
            </Typography>
            <div className="bg-dark p-4 mt-4">
              <ul>
                <li>
                  <span className="text-violet">const</span>
                  {` services = [`}
                </li>
                <li className="text-primary">{`'UI/UX Design'`}</li>
                <li className="text-primary">{`'Web Development'`}</li>
                <li className="text-primary">{`'Mobile App Development'`}</li>
                <li className="text-primary">{`'Full-Stack Developer'`}</li>
                <li className="text-primary">{`]`}</li>
                <li className="text-primary">
                  <span className="text-violet mr-2">if</span>
                  <span className="text-white mr-2">(have_a_project)</span>
                  {`navigate('/contact')`}
                </li>
              </ul>
            </div>
          </div>

          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="2000">
            <div className="mx-auto relative md:top-[-40px] z-10 ">
              <ReponsiveImageResize
                src={"/image/banner-dev.png"}
                alt="/banner-dev"
                heightSize={"pt-[100%]"}
              />
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] top-0 ">
              <ReponsiveImageAuto
                src="/svg/effect-3.svg"
                alt="logo-dev-portfolio"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-body-color p-8 relative mt-10 lg:mt-0 lg:top-[-40px]">
        <div className="container mx-auto">
          <SliderSvg />
        </div>
      </div>

      {/* render svg */}
      <RenderSvg />
    </section>
  );
};

export default Banner;
