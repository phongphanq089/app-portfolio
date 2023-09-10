import { ReponsiveImageAuto } from "@/components/ReponesiveImage";
import { Chip, Typography } from "@material-tailwind/react";
import React from "react";

const _service = [
  {
    title: "Data Tracking",
    description: "We help digital companies to volume their self-interest.",
    image: "/svg/data.svg",
  },
  {
    title: "Press Releases",
    description:
      "Strategy is a forward-looking plan for your brand's behavior.",
    image: "/svg/financial.svg",
  },
  {
    title: "Financial Audit",
    description:
      "Audits help your company to have the unique plan for your brand.",
    image: "/svg/send.svg",
  },
  {
    title: "Website/App Design",
    description:
      "UI/UX design gives the appearance above your brand's behavior.",
    image: "/svg/design.svg",
  },
];

const WhatWeDo = () => {
  return (
    <div className="container mx-auto mb-[64px]">
      <div className="border rounded-md border-border p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <div data-aos="fade-right" data-aos-duration="1500">
            <Chip value="WHAT WE DO" className="bg-primary w-fit mb-5" />
            <Typography
              variant="h1"
              className="text-4xl md:text-5xl style-text__gradient">
              Does more then ever platform to achieve goal stages.
            </Typography>
            <div>
              <ReponsiveImageAuto
                src="/svg/whatDo.svg"
                alt="logo-dev-portfolio"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div data-aos="fade-left" data-aos-duration="1500">
            <Typography
              variant="paragraph"
              className="text-justify lg:text-start">
              Our clients describe us as a product team which creates amazing
              UI/UX experiences, by crafting top-notch user experience. Data
              Tracking Data Tracking We help digital companies to volume
            </Typography>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {_service &&
                _service.map((items, index) => {
                  return (
                    <div
                      className="p-4 shadow-shadow rounded-md border-border mt-8"
                      key={`${items.title}-${index}`}
                      data-aos="zoom-in"
                      data-aos-duration="2000">
                      <div>
                        <ReponsiveImageAuto
                          src={items.image}
                          alt="logo-dev-portfolio"
                          width={50}
                          height={50}
                        />
                      </div>
                      <Typography variant="h4">{items.title}</Typography>
                      <Typography variant="paragraph">
                        {items.description}
                      </Typography>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
