import React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

interface ActionTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function ActionTimeline({ items, className }: ActionTimelineProps) {
  return (
    <div className={cn("relative border-l border-muted-foreground/20 ml-3 space-y-8", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="relative pl-8">
          {/* Timeline Dot/Icon */}
          <div className={cn(
            "absolute -left-3.5 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-background",
            item.isActive ? "border-primary text-primary" : "border-muted-foreground/30 text-muted-foreground"
          )}>
            {item.icon ? (
              <div className="w-3.5 h-3.5">{item.icon}</div>
            ) : (
              <div className={cn("h-2 w-2 rounded-full", item.isActive ? "bg-primary" : "bg-muted-foreground/30")} />
            )}
          </div>
          
          {/* Content */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h4 className={cn("text-base font-medium", item.isActive ? "text-foreground" : "text-muted-foreground")}>
              {item.href ? (
                <a href={item.href} className="hover:underline hover:text-primary transition-colors">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h4>
            {item.date && (
              <time className="text-xs text-muted-foreground font-mono">{item.date}</time>
            )}
          </div>
          
          {item.description && (
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
