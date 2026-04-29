import React from "react";
import { cn } from "@/lib/utils";
import { Info, AlertTriangle, AlertCircle, CheckCircle2 } from "lucide-react";

type CalloutType = "info" | "warning" | "error" | "success";

interface CalloutBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutStyles: Record<CalloutType, { bg: string; border: string; text: string; icon: React.ReactNode }> = {
  info: {
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    border: "border-blue-500/20",
    text: "text-blue-700 dark:text-blue-400",
    icon: <Info className="w-5 h-5 text-blue-500" />,
  },
  warning: {
    bg: "bg-orange-500/10 dark:bg-orange-500/20",
    border: "border-orange-500/20",
    text: "text-orange-700 dark:text-orange-400",
    icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
  },
  error: {
    bg: "bg-red-500/10 dark:bg-red-500/20",
    border: "border-red-500/20",
    text: "text-red-700 dark:text-red-400",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
  },
  success: {
    bg: "bg-green-500/10 dark:bg-green-500/20",
    border: "border-green-500/20",
    text: "text-green-700 dark:text-green-400",
    icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
  },
};

export function CalloutBox({ type = "info", title, children, className, ...props }: CalloutBoxProps) {
  const style = calloutStyles[type];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border p-4 my-4 flex items-start gap-4",
        style.bg,
        style.border,
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
      <div className="flex-1 space-y-1">
        {title && <h5 className={cn("font-medium leading-none tracking-tight", style.text)}>{title}</h5>}
        <div className={cn("text-sm leading-relaxed", style.text)}>{children}</div>
      </div>
    </div>
  );
}
