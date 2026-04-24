"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  dict: Dictionary;
}

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export function ContactForm({ dict }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(dict.contact.success);
      reset();
    } catch {
      toast.error(dict.contact.error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus-visible:ring-white/20 focus-visible:border-white/30 transition-all";
  const labelClasses = "text-xs font-bold tracking-widest uppercase text-white/40 mb-2 block";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group">
            <label htmlFor="name" className={labelClasses}>{dict.contact.form.name}</label>
            <Input
              id="name"
              placeholder={dict.contact.form.namePlaceholder}
              className={cn(inputClasses, errors.name && "border-red-500/50 focus-visible:ring-red-500/20")}
              {...register("name", { required: true, minLength: 2 })}
            />
          </div>
          <div className="group">
            <label htmlFor="email" className={labelClasses}>{dict.contact.form.email}</label>
            <Input
              id="email"
              type="email"
              placeholder={dict.contact.form.emailPlaceholder}
              className={cn(inputClasses, errors.email && "border-red-500/50 focus-visible:ring-red-500/20")}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
        </div>

        <div className="group">
          <label htmlFor="company" className={labelClasses}>{dict.contact.form.company}</label>
          <Input
            id="company"
            placeholder={dict.contact.form.companyPlaceholder}
            className={inputClasses}
            {...register("company")}
          />
        </div>

        <div className="group">
          <label htmlFor="message" className={labelClasses}>{dict.contact.form.message}</label>
          <Textarea
            id="message"
            placeholder={dict.contact.form.messagePlaceholder}
            className={cn(inputClasses, "min-h-[180px] py-4 resize-none", errors.message && "border-red-500/50 focus-visible:ring-red-500/20")}
            {...register("message", { required: true, minLength: 10 })}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-14 rounded-full bg-white text-neutral-900 hover:bg-white/90 text-base font-semibold transition-all duration-300 shadow-xl shadow-white/5" 
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 border-2 border-neutral-900/30 border-t-neutral-900 rounded-full animate-spin" />
              {dict.contact.form.sending}
            </div>
          ) : (
            dict.contact.form.submit
          )}
        </Button>
      </form>
    </motion.div>
  );
}