import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/dictionary";
import { SectionBackground } from "@/components/ui/section-background";

interface FooterProps {
  dict: Dictionary;
  locale: string;
}

export function Footer({ dict, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white border-t border-white/5">
      <SectionBackground theme="dark" gridOpacity={0.03} showOrbs={false} />

      <div className="container relative z-10 px-6 md:px-8 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                className="w-20 h-20 object-contain transition-opacity group-hover:opacity-80 invert"
              />
            </Link>
            <p className="mt-6 text-base text-white/50 max-w-sm leading-relaxed">
              {dict.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">{dict.footer.links.company}</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href={`/${locale}`} className="text-white/60 hover:text-white transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-white/60 hover:text-white transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/activities`} className="text-white/60 hover:text-white transition-colors">
                  {dict.nav.activities}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/values`} className="text-white/60 hover:text-white transition-colors">
                  {dict.nav.values}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-white/60 hover:text-white transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">{dict.footer.links.services}</h3>
            <ul className="space-y-4 text-sm font-medium">
              {dict.capabilities.items.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <Link href={`/${locale}/activities`} className="text-white/60 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/30 font-medium">
            {currentYear} KLADRIVA. Intelligence Built for Outcomes.
          </p>
          <div className="flex items-center gap-8 text-[13px] text-white/30 font-medium">
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
