"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    contact: {
      title: string;
      url: string;
    };
    quote: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://res.cloudinary.com/dqksqtluq/image/upload/v1755977107/Flat_Vector_Logo_for_Design_Studio_shkzhc.png",
    alt: "SkyEdge 4K Web Development",
    title: "SkyEdge4K.Studio",
  },
  menu = [
    { title: "Home", url: "#" },
    { title: "What We Do", url: "#whatwedo" },
    { title: "Reviews", url: "#reviews" },
    { title: "Contact Us", url: "#contact" },
    { title: "Pricing", url: "#pricing" },
  ],
  auth = {
    contact: { title: "Chat on WhatsApp", url: "https://wa.me/573001614490" },
    quote: { title: "Get a Free Quote", url: "#contact" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container max-w-6xl mx-auto items-center">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-3">
            {/* Logo + Company Name */}
            <a
              href={logo.url}
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={42}
                height={42}
                className="rounded-md"
              />
              <span className="text-lg font-semibold tracking-tight">
                {logo.title}
              </span>
            </a>

            {/* Menu Items */}
            <div className="flex items-center space-x-10 ml-8">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-8">
                  {menu.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        href={item.url}
                        className="relative inline-flex items-center px-1 py-2 text-base font-medium text-foreground transition-colors duration-300 ease-in-out hover:text-black"
                      >
                        {item.title}
                        {/* independent underline animation */}
                        <span
                          className="
                            absolute bottom-0 left-0 
                            h-[2px] w-0 
                            bg-black 
                            transition-all duration-300 ease-in-out 
                            hover:w-full
                          "
                        ></span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-36 h-10 transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
            >
              <a
                href={auth.contact.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {auth.contact.title}
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="w-36 h-10 bg-blue-600 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              <a href={auth.quote.url}>{auth.quote.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href={logo.url}
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={38}
                height={38}
                className="rounded-md"
              />
              <span className="text-lg font-semibold tracking-tight">
                {logo.title}
              </span>
            </a>

            {/* Mobile Menu Drawer */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={35}
                        height={35}
                        className="rounded-md"
                      />
                      <span className="text-lg font-semibold tracking-tight">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Links */}
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-3"
                  >
                    {menu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        // onClick={(e) => handleNavItemClick(link, e)}
                        className="block text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </Accordion>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a
                        href={auth.contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {auth.contact.title}
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={auth.quote.url}>{auth.quote.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar };
