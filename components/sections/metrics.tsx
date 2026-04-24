"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import { SectionBackground } from "@/components/ui/section-background";
import { cn } from "@/lib/utils";

interface MetricsProps {
  dict: Dictionary;
}

export function Metrics({ dict }: MetricsProps) {
  const metrics = [
    { icon: Target, value: dict.metrics.projects.value, label: dict.metrics.projects.label },
    { icon: Users, value: dict.metrics.satisfaction.value, label: dict.metrics.satisfaction.label },
    { icon: TrendingUp, value: dict.metrics.conversion.value, label: dict.metrics.conversion.label },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <SectionBackground theme="light" />
      
      <div className="container relative z-10 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-4 text-neutral-500">
            {dict.metrics.title}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-neutral-900">
            Measurable impact for <br className="hidden md:block" /> global businesses.
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="flex flex-col items-start">
                <div className="mb-6 p-3 rounded-2xl bg-neutral-100 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                  <metric.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-neutral-900">
                  {metric.value}
                </div>
                <div className="mt-3 text-lg text-neutral-600 font-medium leading-tight max-w-[200px]">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}