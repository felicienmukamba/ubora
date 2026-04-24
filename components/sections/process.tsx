"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/section-background";
import type { Dictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";

interface ProcessProps {
  dict: Dictionary;
}

export function Process({ dict }: ProcessProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <SectionBackground theme="light" showOrbs={false} />
      
      <div className="container relative z-10 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-4 text-neutral-500">
            {dict.process.title}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-neutral-900 max-w-2xl mx-auto">
            {dict.process.subtitle}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="absolute top-[39px] left-0 right-0 h-px bg-neutral-200 hidden lg:block" aria-hidden />

          <div className="grid gap-12 lg:grid-cols-4 relative">
            {dict.process.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="relative z-10 flex flex-col items-start lg:items-center lg:text-center">
                  <div className="mb-8 w-[80px] h-[80px] rounded-full bg-white border-2 border-neutral-100 flex items-center justify-center text-xl font-semibold text-neutral-900 shadow-sm group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500">
                    0{index + 1}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 tracking-tight text-neutral-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed text-sm md:text-base max-w-[240px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}