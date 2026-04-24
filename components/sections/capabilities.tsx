"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionBackground } from "@/components/ui/section-background";
import type { Dictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  BrainCircuit, 
  MessageSquare, 
  Eye, 
  Settings2, 
  Database 
} from "lucide-react";

interface CapabilitiesProps {
  dict: Dictionary;
}

const icons = [
  BrainCircuit,
  BarChart3,
  MessageSquare,
  Eye,
  Settings2,
  Database,
];

export function Capabilities({ dict }: CapabilitiesProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-white">
      <SectionBackground theme="dark" />
      
      <div className="container relative z-10 px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-4 text-white/50">
              {dict.capabilities.title}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Intelligence applied to <br className="hidden md:block" /> your core operations.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/60 max-w-sm leading-relaxed"
          >
            {dict.capabilities.subtitle}
          </motion.p>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
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
                  className="group relative bg-neutral-950 p-8 md:p-10 hover:bg-neutral-900/50 transition-colors"
                >
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-white group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/60 leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm bg-white/5 text-white/40 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}