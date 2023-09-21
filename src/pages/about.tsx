import AnimationText from "@/components/AnimationText";
import { ReponsiveImageResize } from "@/components/ReponesiveImage";
import Layout from "@/components/layout";
import SpeedDialWithTextOutside from "@/views/SpeedDial";
import { Chip, Typography } from "@material-tailwind/react";
import React from "react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-[120px] mb-[64px]">
        <AnimationText
          text="Passion Fuels Purpose! "
          className=" style-text__gradient text-center text-5xl md:text-7xl"
          classBox="mt-10 mb-10"
        />
        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden ">
            <ReponsiveImageResize src={"/image/dev-7.png"} />
          </div>
          <div className="flex flex-col items-start justify-center">
            <Chip value="BIOGRAPHY" className="bg-primary w-fit mb-5 text-xl" />
            <Typography variant="paragraph" className="mb-5 text-lg">
              {` Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.`}
            </Typography>
            <Typography variant="paragraph" className="mb-5 text-lg">
              {` I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.`}
            </Typography>
            <Typography variant="paragraph" className="mb-5 text-lg">
              {`Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.`}
            </Typography>
          </div>
        </div>
      </div>
      <SpeedDialWithTextOutside />
    </Layout>
  );
};

export default About;
