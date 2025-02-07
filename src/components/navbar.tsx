"use client";

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function Navigation() {
    return (
        <Navbar fluid className="bg-transparent shadow-none w-full px-6 md:px-12" rounded>
            {/* Brand Logo */}
            <NavbarBrand as={Link} href="/">
                <span className="self-center text-xl font-semibold text-white">
                    DevOps Hub
                </span>
            </NavbarBrand>

            {/* Mobile Toggle Button */}
            <NavbarToggle className="text-white" />

            {/* Navigation Links */}
            <NavbarCollapse className="text-center md:text-left">
                <NavbarLink as={Link} href="/" active className="text-white hover:text-gray-400">
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="/services" className="text-white hover:text-gray-400">
                    Services
                </NavbarLink>
                <NavbarLink as={Link} href="/about" className="text-white hover:text-gray-400">
                    About
                </NavbarLink>
                <NavbarLink as={Link} href="/contact" className="text-white hover:text-gray-400">
                    Contact
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
