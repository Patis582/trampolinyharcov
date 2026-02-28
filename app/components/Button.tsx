import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  filled: boolean;
  href: string;
  textWhite?: boolean;
  textBlackOnHover?: boolean;
  target?: "_blank" | "_self";
  download?: boolean | string;
}

const Button = ({
  children,
  filled,
  href,
  textWhite,
  textBlackOnHover,
  target,
  download,
}: Props) => {
  return (
    <Link
      target={target ? target : "_self"}
      href={href}
      download={download}
      className={`border-2 flex border-primary w-fit rounded-lg rounded-tl-sm rounded-br-sm px-8 py-3 button-text transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95
        ${
          filled
            ? `bg-primary hover:bg-primary/90 text-white hover:shadow-md-modern ${textBlackOnHover ? "hover:text-black hover:bg-transparent" : "text-white"}`
            : `bg-transparent hover:bg-primary hover:text-white text-black ${textWhite ? "text-white hover:bg-primary/90" : "text-black"} hover:shadow-sm-modern`
        }`}
    >
      {children}
    </Link>
  );
};

export default Button;
