import React from "react";
import { cn } from "@/lib/utils";

type StatusType = "online" | "offline" | "busy" | "away";

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  label?: string;
  showDotOnly?: boolean;
}

const statusConfig: Record<StatusType, { color: string; bg: string; text: string }> = {
  online: { color: "bg-green-500", bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400" },
  busy: { color: "bg-purple-500", bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400" },
  offline: { color: "bg-slate-400", bg: "bg-slate-500/10", text: "text-slate-600 dark:text-slate-400" },
  away: { color: "bg-orange-500", bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400" },
};

export function StatusBadge({ status, label, showDotOnly = false, className, ...props }: StatusBadgeProps) {
  const config = statusConfig[status];
  const displayLabel = label || status.charAt(0).toUpperCase() + status.slice(1);

  if (showDotOnly) {
    return (
      <span className="relative flex h-3 w-3">
        {status === "online" && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span className={cn("relative inline-flex rounded-full h-3 w-3", config.color)}></span>
      </span>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.bg,
        config.text,
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        {status === "online" && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", config.color)}></span>
      </span>
      {displayLabel}
    </div>
  );
}
