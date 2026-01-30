"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type React from "react";
// Removed LanguageSwitcher import
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
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://res.cloudinary.com/dtza2wtax/image/upload/v1765670347/Dise%C3%B1o_sin_t%C3%ADtulo_fwcjkw.png",
    alt: "SkyEdge 4K Web Development",
    title: "SkyEdge4K.Studio",
  },
}: Navbar1Props) => {
  const t = useTranslations("Navbar");

  // Localized Menu Data
  const menu: MenuItem[] = [
    { title: t("home"), url: "/" },
    { title: t("whatwedo"), url: "#whatwedo" },
    { title: t("reviews"), url: "#reviews" },
    { title: t("contact"), url: "#contact" },
    { title: t("pricing"), url: "#pricing" },
  ];

  const auth = {
    contact: { title: t("whatsapp"), url: "https://wa.me/573001614490" },
    quote: { title: t("quote"), url: "#contact" },
  };

  return (
    <section className="py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container max-w-6xl mx-auto items-center">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-3">
            <Link
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
            </Link>

            <div className="flex items-center space-x-10 ml-8">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-8">
                  {menu.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        asChild
                        className="relative inline-flex items-center px-1 py-2 text-base font-medium text-foreground transition-colors duration-300 ease-in-out hover:text-black cursor-pointer"
                      >
                        <Link href={item.url}>
                          {item.title}
                          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out hover:w-full"></span>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher Removed From Here */}

            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-40 h-10 border-[#25D366] text-[#25D366] transition-all duration-300 hover:scale-105 hover:bg-[#25D366] hover:text-white font-semibold"
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
              className="w-40 h-10 bg-blue-600 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              <Link href={auth.quote.url}>{auth.quote.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link
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
            </Link>

            <div className="flex items-center gap-2">
              {/* Language Switcher Removed From Here */}
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={logo.url} className="flex items-center gap-2">
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
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-6 p-4">
                    <div className="flex w-full flex-col gap-3">
                      {menu.map((item) => (
                        <Link
                          key={item.title}
                          href={item.url}
                          className="block text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button 
                        asChild 
                        variant="outline"
                        className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                      >
                        <a
                          href={auth.contact.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {auth.contact.title}
                        </a>
                      </Button>
                      <Button asChild>
                        <Link href={auth.quote.url}>{auth.quote.title}</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar };