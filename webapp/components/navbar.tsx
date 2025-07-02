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
        <h1>Lucy&apos;s Sweet Creations</h1>
        </Link>
        <Image
          alt="Cake Logo"
          src= "/images/cake_icon.png"
          width={30}
        />
      </NavbarBrand>

      {/* Centered Navbar Items */}
      <NavbarContent className="flex-1 flex justify-center gap-4">
        <NavbarItem className=""><p>Pricing</p></NavbarItem>
        <Link>
        </Link>
        <Link href="/schedule">
          <NavbarItem className=""> <p>Schedule</p> </NavbarItem>
        </Link>
        <Link href="/contact">
        <NavbarItem className=""> <p>Contact</p></NavbarItem>
        </Link>
      </NavbarContent>

      {/* Right-aligned Navbar Items */}
      <NavbarContent className="flex items-center gap-3" justify="end">
        <NavbarItem>
          <Link isExternal aria-label="Facebook" href="https://www.facebook.com/lucy.s.sweet.creations.2024">
            <FaFacebook />
          </Link>
          </NavbarItem>
        <NavbarItem>
          <Link isExternal aria-label="Instagram" href="https://www.instagram.com/lucys_sweetcreations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <FaInstagram />
          </Link>
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  );
};
