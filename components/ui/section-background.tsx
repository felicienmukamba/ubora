import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
  theme?: "light" | "dark";
  className?: string;
  gridOpacity?: number;
  showOrbs?: boolean;
}

export function SectionBackground({
  theme = "light",
  className,
  gridOpacity,
  showOrbs = true,
}: SectionBackgroundProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Base layer */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-500",
          isDark ? "bg-neutral-950" : "bg-white"
        )}
      />

      {showOrbs && (
        <>
          {/* Aurora orbs — subtle ambient glow */}
          <div
            className={cn(
              "absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full blur-[100px] opacity-40",
              isDark
                ? "bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.35),transparent_70%)]"
                : "bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.2),transparent_70%)]"
            )}
          />
          <div
            className={cn(
              "absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full blur-[120px] opacity-30",
              isDark
                ? "bg-[radial-gradient(circle_at_center,rgba(255,200,150,0.15),transparent_70%)]"
                : "bg-[radial-gradient(circle_at_center,rgba(200,220,255,0.4),transparent_70%)]"
            )}
          />
        </>
      )}

      {/* Fine grid */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          gridOpacity !== undefined
            ? ""
            : isDark
            ? "opacity-[0.06]"
            : "opacity-[0.04]"
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
          opacity: gridOpacity,
        }}
      />
    </div>
  );
}
