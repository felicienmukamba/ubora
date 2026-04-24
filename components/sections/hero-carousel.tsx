"use client";

import * as React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/dictionary";

interface HeroCarouselProps {
  dict: Dictionary;
  locale: string;
}

const AUTOPLAY_DELAY = 6500;

export function HeroCarousel({ dict, locale }: HeroCarouselProps) {
  const slides = dict.heroCarousel.slides;

  // Autoplay plugin instance — stable across renders
  const autoplay = React.useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progressKey, setProgressKey] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setProgressKey((k) => k + 1);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const togglePlay = React.useCallback(() => {
    const plugin = autoplay.current;
    if (!plugin) return;
    if (isPlaying) {
      plugin.stop();
      setIsPlaying(false);
    } else {
      plugin.play();
      setIsPlaying(true);
      setProgressKey((k) => k + 1);
    }
  }, [isPlaying]);

  const goTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section
      className="relative w-full"
      aria-roledescription="carousel"
      aria-label={dict.hero.title}
    >
      <Carousel
        opts={{ loop: true, duration: 35 }}
        plugins={[autoplay.current]}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, i) => (
            <CarouselItem
              key={i}
              className="pl-0 basis-full"
              aria-label={`${i + 1} / ${slides.length}`}
            >
              <Slide
                slide={slide}
                locale={locale}
                active={current === i}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Pagination + play/pause */}
        <div className="absolute left-1/2 bottom-6 md:bottom-8 -translate-x-1/2 z-20 flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-background/60 backdrop-blur-md px-3 py-1.5 border border-border/50 shadow-sm">
            {slides.map((_, i) => {
              const isActive = current === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={isActive}
                  className={cn(
                    "relative h-1.5 rounded-full overflow-hidden transition-[width] duration-500",
                    isActive
                      ? "w-10 bg-foreground/20"
                      : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                  )}
                >
                  {isActive && isPlaying && (
                    <span
                      key={progressKey}
                      className="absolute inset-y-0 left-0 bg-foreground rounded-full origin-left"
                      style={{
                        animation: `hc-progress ${AUTOPLAY_DELAY}ms linear forwards`,
                      }}
                    />
                  )}
                  {isActive && !isPlaying && (
                    <span className="absolute inset-0 bg-foreground rounded-full" />
                  )}
                </button>
              );
            })}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={
                isPlaying ? dict.heroCarousel.pauseLabel : dict.heroCarousel.playLabel
              }
              className="ml-1 flex h-5 w-5 items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-3 w-3" fill="currentColor" />
              ) : (
                <Play className="h-3 w-3" fill="currentColor" />
              )}
            </button>
          </div>
        </div>
      </Carousel>

      <style jsx global>{`
        @keyframes hc-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hc-slide-content * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- Slide ---------------- */

interface SlideProps {
  slide: Dictionary["heroCarousel"]["slides"][number];
  locale: string;
  active: boolean;
}

function Slide({ slide, locale, active }: SlideProps) {
  const isDark = slide.theme === "dark";

  return (
    <div
      className={cn(
        "relative w-full h-[88vh] min-h-[620px] overflow-hidden",
        isDark ? "text-white" : "text-neutral-900"
      )}
    >
      {/* Background */}
      <SlideBackground theme={slide.theme} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-[1024px] px-6 md:px-8">
          <div className="max-w-2xl hc-slide-content">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={cn(
                      "text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-4",
                      isDark ? "text-white/70" : "text-neutral-600"
                    )}
                  >
                    {slide.eyebrow}
                  </div>

                  <h2
                    className={cn(
                      "font-semibold tracking-[-0.03em] leading-[1.05]",
                      "text-4xl sm:text-5xl md:text-6xl lg:text-[68px]"
                    )}
                  >
                    {slide.title}
                  </h2>

                  <p
                    className={cn(
                      "mt-5 md:mt-6 text-lg md:text-xl leading-relaxed max-w-xl",
                      isDark ? "text-white/80" : "text-neutral-700"
                    )}
                  >
                    {slide.subtitle}
                  </p>

                  <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-5">
                    <Link href={`/${locale}${slide.primaryHref}`}>
                      <Button
                        size="lg"
                        className={cn(
                          "rounded-full h-11 px-6 text-sm font-medium",
                          isDark
                            ? "bg-white text-neutral-900 hover:bg-white/90"
                            : "bg-neutral-900 text-white hover:bg-neutral-800"
                        )}
                      >
                        {slide.primaryCta}
                      </Button>
                    </Link>
                    <Link
                      href={`/${locale}${slide.secondaryHref}`}
                      className={cn(
                        "group inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                        isDark
                          ? "text-white/90 hover:text-white"
                          : "text-neutral-900 hover:text-neutral-700"
                      )}
                    >
                      {slide.secondaryCta}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Background (sophisticated per-theme gradient + grid) ---------------- */

function SlideBackground({ theme }: { theme: string }) {
  const isDark = theme === "dark";

  return (
    <>
      {/* Base layer */}
      <div
        className={cn(
          "absolute inset-0",
          isDark ? "bg-neutral-950" : "bg-neutral-50"
        )}
      />

      {/* Aurora orbs — subtle ambient glow */}
      <div
        className={cn(
          "absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full blur-3xl opacity-40",
          isDark
            ? "bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.35),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.25),transparent_70%)]"
        )}
      />
      <div
        className={cn(
          "absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-30",
          isDark
            ? "bg-[radial-gradient(circle_at_center,rgba(255,200,150,0.2),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(200,220,255,0.5),transparent_70%)]"
        )}
      />

      {/* Fine grid */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          isDark ? "opacity-[0.06]" : "opacity-[0.04]"
        )}
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          color: isDark ? "#fff" : "#000",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      {/* Vignette for content legibility */}
      <div
        className={cn(
          "absolute inset-0",
          isDark
            ? "bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"
            : "bg-gradient-to-t from-white/60 via-transparent to-transparent"
        )}
      />
    </>
  );
}
