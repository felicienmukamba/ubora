"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, BrainCircuit, MessageSquare, Eye, Settings2, Database } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import { SectionBackground } from "@/components/ui/section-background";

interface ActivitiesPageProps {
  dict: Dictionary;
  locale: string;
}

const icons = [
  BrainCircuit,
  BarChart3,
  MessageSquare,
  Eye,
  Settings2,
  Database,
];

export function ActivitiesContent({ dict, locale }: ActivitiesPageProps) {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-neutral-950 text-white">
        <SectionBackground theme="dark" />
        <div className="container relative z-10 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-6 text-white/50">
              Our Expertise
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[1.05] mb-8">
              {dict.activities.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              {dict.activities.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <SectionBackground theme="light" />
        <div className="container relative z-10 px-6 md:px-8">
          <div className="grid gap-px bg-neutral-200 border border-neutral-200 rounded-3xl overflow-hidden shadow-2xl shadow-black/5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {dict.capabilities.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="group relative bg-white p-8 md:p-12 hover:bg-neutral-50 transition-all duration-500"
                  >
                    <div className="relative z-10">
                      <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500 shadow-sm">
                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      
                      <h2 className="text-2xl font-semibold mb-4 tracking-tight text-neutral-900">
                        {item.title}
                      </h2>
                      
                      <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Subtle hover indicator */}
                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-5 w-5 text-neutral-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-10">
              Ready to implement AI in your business?
            </h2>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="rounded-full h-14 px-10 text-base font-medium bg-white text-neutral-900 hover:bg-white/90 transition-all shadow-xl shadow-white/10">
                {dict.activities.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}