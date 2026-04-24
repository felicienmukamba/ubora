"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Users2, LineChart } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import { SectionBackground } from "@/components/ui/section-background";
import { cn } from "@/lib/utils";

interface AboutPageProps {
  dict: Dictionary;
  locale: string;
}

const keyPointIcons = [
  LineChart,
  Zap,
  ShieldCheck,
  Users2,
];

export function AboutContent({ dict, locale }: AboutPageProps) {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <SectionBackground theme="light" />
        <div className="container relative z-10 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-6 text-neutral-500">
              {dict.nav.about}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[1.05] text-neutral-900">
              Building the future of <br className="hidden md:block" /> intelligent commerce.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-white">
        <SectionBackground theme="dark" />
        <div className="container relative z-10 px-6 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm bg-white/10 text-white/70 border border-white/10 w-fit mb-6">
                {dict.about.vision.title}
              </div>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white/90">
                {dict.about.vision.content}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:mt-32"
            >
              <div className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm bg-white/10 text-white/70 border border-white/10 w-fit mb-6">
                {dict.about.mission.title}
              </div>
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                {dict.about.mission.content}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <SectionBackground theme="light" showOrbs={false} />
        <div className="container relative z-10 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-24"
          >
            <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-4 text-neutral-500">
              Why KLADRIVA
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-neutral-900">
              {dict.about.keyPoints.title}
            </h2>
          </motion.div>

          <div className="grid gap-px bg-neutral-200 border border-neutral-200 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              {dict.about.keyPoints.items.map((item, index) => {
                const Icon = keyPointIcons[index % keyPointIcons.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group bg-white p-8 md:p-10 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="mb-8 p-3 rounded-2xl bg-neutral-100 text-neutral-900 w-fit group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 tracking-tight text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-white">
        <SectionBackground theme="dark" />
        <div className="container relative z-10 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-4 text-white/50">
              The Team
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1]">
              {dict.about.team.title}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {dict.about.team.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {dict.about.team.roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                    className="h-full bg-white origin-left"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{role.title}</h3>
                <p className="text-white/60 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <SectionBackground theme="light" />
        <div className="container relative z-10 px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-neutral-900 mb-10">
              Ready to meet the experts?
            </h2>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="rounded-full h-14 px-10 text-base font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-xl shadow-black/5">
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