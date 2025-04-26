"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image
} from "@heroui/react";

import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function WebBar() {

  return (
    <Navbar shouldHideOnScroll maxWidth="full" isBordered className="flex items-center ">

      {/* Left-aligned Navbar Brand */}
      <NavbarBrand className="flex items-center space-x-2">
        <Link className="text-pink-500" href="/">
          Lucy's Sweet Creations   
        </Link>
        <Image
          alt="Cake Logo"
          src= "/images/cake_icon.png"
          width={30}
        />
      </NavbarBrand>

      {/* Centered Navbar Items */}
      <NavbarContent className="flex-1 flex justify-center gap-4">
        <NavbarItem className=""> Pricing</NavbarItem>
        <NavbarItem className=""> Schedule</NavbarItem>
        <NavbarItem className=""> Contact </NavbarItem>
      </NavbarContent>

      {/* Right-aligned Navbar Items */}
      <NavbarContent className="flex items-center gap-3" justify="end">
        <NavbarItem>
          <Link isExternal aria-label="Facebook" href="https://www.facebook.com">
            <FaFacebook />
          </Link>
          </NavbarItem>
        <NavbarItem>
          <Link isExternal aria-label="Instagram" href="https://www.instagram.com">
            <FaInstagram />
          </Link>
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  );
};
