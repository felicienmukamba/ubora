"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/dictionary";

interface HeaderProps {
  dict: Dictionary;
  locale: string;
}

export function Header({ dict, locale }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/activities`, label: dict.nav.activities },
    { href: `/${locale}/values`, label: dict.nav.values },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        "supports-[backdrop-filter]:backdrop-blur-xl",
        scrolled
          ? "bg-background/75 border-b border-border/50"
          : "bg-background/40 border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 group"
          aria-label="KLADRIVA"
        >
          <Image
            src="/logo.png"
            alt=""
            width={24}
            height={24}
            priority
            className="w-20 h-20 object-contain transition-opacity group-hover:opacity-80"
          />
        </Link>

        {/* Desktop Navigation — centered, Apple-style */}
        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-[12px] font-normal transition-colors",
                "after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-foreground",
                "after:transition-all after:duration-300",
                isActive(item.href)
                  ? "text-foreground after:w-full"
                  : "text-foreground/70 hover:text-foreground after:w-0 hover:after:w-full"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={locale === "en" ? "/fr" : "/en"}
            className="text-[11px] font-medium tracking-wider text-foreground/60 hover:text-foreground transition-colors"
          >
            {locale === "en" ? "FR" : "EN"}
          </Link>
          <Link href={`/${locale}/contact`}>
            <Button
              size="sm"
              className="h-8 rounded-full px-4 text-[12px] font-medium"
            >
              {dict.nav.cta}
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <div className="flex items-center gap-2 mt-2">
              <Image
                src="/logo.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="text-[13px] font-medium tracking-[0.18em]">
                KLADRIVA
              </span>
            </div>
            <nav className="flex flex-col gap-1 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-3 text-2xl font-medium tracking-tight transition-colors border-b border-border/40",
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Link href={`/${locale}/contact`} onClick={() => setOpen(false)}>
                <Button className="w-full rounded-full h-11">
                  {dict.nav.cta}
                </Button>
              </Link>
              <Link
                href={locale === "en" ? "/fr" : "/en"}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/60 hover:text-foreground self-center"
              >
                {locale === "en" ? "Français" : "English"}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
