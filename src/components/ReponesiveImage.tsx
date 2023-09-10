import Image from "next/image";
import React from "react";

type Props = {
  src: string | any;
  alt?: string;
  heightSize?: string;
  width?: string | any;
  height?: string | any;
  classname?: string;
};

export const ReponsiveImageAuto = ({
  src,
  alt,
  width,
  height,
  classname,
}: Props) => {
  return (
    <Image
      src={src}
      alt={alt ? alt : "image-default"}
      width={width}
      height={height}
      className={`h-auto object-cover ${classname}`}
    />
  );
};

export const ReponsiveImageResize = ({ src, alt, heightSize }: Props) => {
  return (
    <div
      className={`${
        heightSize ? heightSize : "pt-[100%]"
      }  overflow-hidden relative `}>
      <Image
        src={src}
        alt={alt ? alt : "image-default"}
        fill
        className="h-auto object-cover"
      />
    </div>
  );
};
