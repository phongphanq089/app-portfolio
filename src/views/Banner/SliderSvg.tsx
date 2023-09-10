import { ReponsiveImageAuto } from "@/components/ReponesiveImage";
import React from "react";
import Slider from "react-slick";

const SliderSvg = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const listImage = [
    "/image/company/company-1.svg",
    "/image/company/company-2.svg",
    "/image/company/company-3.svg",
    "/image/company/company-4.svg",
    "/image/company/company-5.svg",
  ];
  return (
    <React.Fragment>
      <Slider {...settings}>
        {listImage &&
          listImage.map((items, index) => (
            <div key={`item-${index}`}>
              <ReponsiveImageAuto
                src={items}
                alt="logo-dev-portfolio"
                width={80}
                height={80}
                classname="mx-auto  h-auto"
              />
            </div>
          ))}
      </Slider>
    </React.Fragment>
  );
};

export default SliderSvg;
