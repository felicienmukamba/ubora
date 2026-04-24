"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Handshake, Shield, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import { SectionBackground } from "@/components/ui/section-background";

interface ValuesPageProps {
  dict: Dictionary;
  locale: string;
}

const valueIcons = [
  Sparkles,
  Target,
  Handshake,
  Shield,
  Zap,
  TrendingUp,
];

export function ValuesContent({ dict, locale }: ValuesPageProps) {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <SectionBackground theme="light" />
        <div className="container relative z-10 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-6 text-neutral-500">
              {dict.nav.values}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[1.05] mb-8">
              {dict.values.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
              {dict.values.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-white">
        <SectionBackground theme="dark" />
        <div className="container relative z-10 px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dict.values.coreValues.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="mb-8 p-3 rounded-2xl bg-white/10 text-white w-fit group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Big Quote */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-white">
        <SectionBackground theme="light" showOrbs={false} />
        <div className="container relative z-10 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="text-6xl md:text-8xl text-neutral-200 font-serif leading-none block mb-4">“</span>
            <blockquote className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-tight text-neutral-900 mb-12">
              {dict.values.quote.text}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-neutral-300" />
              <p className="text-lg md:text-xl font-medium text-neutral-500">{dict.values.quote.author}</p>
              <div className="h-px w-8 bg-neutral-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practices */}
      <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
        <SectionBackground theme="light" />
        <div className="container relative z-10 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-900">
              {dict.values.practices.title}
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dict.values.practices.items.map((practice, index) => (
              <motion.div
                key={practice}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-neutral-900" />
                <p className="font-medium text-neutral-800">{practice}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-white">
        <SectionBackground theme="dark" />
        <div className="container relative z-10 px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-10">
              Let's build something extraordinary.
            </h2>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="rounded-full h-14 px-10 text-base font-medium bg-white text-neutral-900 hover:bg-white/90 transition-all shadow-xl shadow-white/10">
                {dict.nav.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}