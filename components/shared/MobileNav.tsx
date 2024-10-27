"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/">
        <Image
          src={"/assets/images/logo-text.svg"}
          width={180}
          height={28}
          alt="Logo Image"
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                height={32}
                width={32}
                className="cursor-pointer"
                alt="menu"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src={"/assets/images/logo-text.svg"}
                  width={152}
                  height={23}
                  alt="logo"
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route == pathname;

                    return (
                      <li
                        key={link.route}
                        className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                      >
                        <Link href={link.route} className="sidebar-link cursor-pointer">
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                            
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href={"/sign-n"}>Login</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
