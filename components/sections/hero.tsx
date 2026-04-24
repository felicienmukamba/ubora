"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionary";
import { SectionBackground } from "@/components/ui/section-background";

interface HeroProps {
  dict: Dictionary;
  locale: string;
}

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      <SectionBackground theme="light" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-8 text-neutral-500">
              Intelligence Built for Outcomes
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[1.05] text-neutral-900">
              {dict.hero.title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="h-14 px-8 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-xl shadow-black/5">
                {dict.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={`/${locale}/activities`}>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-neutral-200 hover:bg-neutral-50 transition-all">
                {dict.hero.secondary}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}