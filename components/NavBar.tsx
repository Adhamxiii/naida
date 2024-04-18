import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Marketplace",
    link: "/",
  },
  {
    name: "Collections",
    link: "/",
  },
  {
    name: "Community",
    link: "/",
  },
];

const NavBar = () => {
  return (
    <header className="flex justify-between px-[100px] py-9 items-center h-[116px] max-md:px-[20px]">
      <Image src="/logo.png" alt="logo" width={52} height={44} />
      <nav className="flex gap-10">
        <ul className="flex gap-10">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                className="text-white text-[16px] font-medium"
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <CustomButton typeBtn="secondary">Connect Wallet</CustomButton>
    </header>
  );
};

export default NavBar;
