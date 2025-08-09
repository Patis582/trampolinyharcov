import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#333333] mt-44 lg:mt-75">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6497.906346120883!2d15.0957564!3d50.7765288!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDQ2JzM2LjMiTiAxNcKwMDUnNTMuMiJF!5e1!3m2!1scs!2scz!4v1754383375152!5m2!1scs!2scz"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
      <div className="flex justify-between max-w-5xl px-8 py-4 lg:px-0 text-white mx-auto items-center">
        <a href=""><Image src={"/images/Logo-removebg.png"} alt="logo" width={50} height={50}/></a>
        
        <p>&copy; {currentYear} Trampolíny Liberec</p>
        <div className="flex gap-2">
            <a target="_blank" href="https://www.facebook.com/trampolinypatrman/?locale=cs_CZ"><FaFacebook /></a>
            <a target="_blank" href="https://www.instagram.com/trampolinypatrman?utm_source=ig_web_button_share_sheet"><FaInstagram /></a>
            <a target="_blank" href="https://www.instagram.com/trampoliny_liberec?utm_source=ig_web_button_share_sheet"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
