"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/contact-form";
import type { Dictionary } from "@/lib/dictionary";
import { SectionBackground } from "@/components/ui/section-background";

interface ContactPageProps {
  dict: Dictionary;
}

export function ContactContent({ dict }: ContactPageProps) {
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
              Get in touch
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[1.05] mb-8">
              {dict.contact.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
              {dict.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-white">
        <SectionBackground theme="dark" />
        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <ContactForm dict={dict} />
          </div>
        </div>
      </section>
    </main>
  );
}