import React from "react";
import { ReponsiveImageAuto } from "./ReponesiveImage";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-4">
      <div className="w-fit h-fit">
        <ReponsiveImageAuto
          src="/logo.svg"
          alt="logo-dev-portfolio"
          width={70}
          height={70}
        />
      </div>
      <div className="flex items-start flex-col">
        <span className="font-bold text-inherit style-text__border">
          {" PROGRAMMER'S "}
        </span>
        <span className="font-bold text-inherit style-text__border">
          {"DREAM"}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
