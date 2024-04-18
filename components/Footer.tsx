import Image from "next/image";
import React from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { footerLinks } from "@/data";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    name: "facebook",
    icon: <TiSocialFacebook />,
    link: "/",
  },
  {
    id: 2,
    name: "twitter",
    icon: <TiSocialTwitter />,
    link: "/",
  },
  {
    id: 3,
    name: "instagram",
    icon: <RiInstagramFill />,
    link: "/",
  },
  {
    id: 4,
    name: "linkedin",
    icon: <FaLinkedin />,
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-[312px] flex flex-col justify-between items-center px-[100px] py-8 bg-gray-800">
      <div className="w-full flex justify-between items-center">
        <div className="h-full flex flex-col justify-between ">
          <div className="flex flex-col gap-3 items-start">
            <Image src="/Logo-footer.svg" alt="logo" width={131} height={44} />
            <p className="text-white leading-8 font-medium">
              Best place for trade your NFT ever
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <div
                key={link.id}
                className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-[#161616] text-white text-base"
              >
                {link.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-[77px]">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-2">
              <h3 className="font-bold text-white leading-8">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-white leading-8"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-white leading-[150%]">
          © Design by Ahmad Fauzan Azhim | Developed by Adham Nasser. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
