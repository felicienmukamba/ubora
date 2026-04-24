"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionBackground } from "@/components/ui/section-background";
import type { Dictionary } from "@/lib/dictionary";

interface CtaProps {
  dict: Dictionary;
  locale: string;
}

export function Cta({ dict, locale }: CtaProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-white">
      <SectionBackground theme="dark" />
      
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-6 text-white/50">
              Get started
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.05] mb-8">
              {dict.cta.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              {dict.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/contact`}>
                <Button 
                  size="lg" 
                  className="rounded-full h-14 px-8 text-base font-medium bg-white text-neutral-900 hover:bg-white/90 transition-all duration-300 shadow-xl shadow-white/10"
                >
                  {dict.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              
              <Link href={`/${locale}/activities`}>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-full h-14 px-8 text-base font-medium border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
                >
                  {dict.nav.activities}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}