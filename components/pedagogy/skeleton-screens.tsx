"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
  lines?: number;
}

export function SkeletonCard({ className, lines = 3 }: SkeletonCardProps) {
  return (
    <div className={cn("rounded-xl border bg-card p-6 space-y-4 animate-pulse", className)}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-muted"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 w-2/3 bg-muted rounded"></div>
          <div className="h-3 w-1/3 bg-muted rounded"></div>
        </div>
      </div>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 bg-muted rounded" style={{ width: `${85 - i * 15}%` }}></div>
      ))}
    </div>
  );
}

export function SkeletonCourseCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border bg-card overflow-hidden animate-pulse", className)}>
      <div className="h-32 bg-muted"></div>
      <div className="p-5 space-y-3">
        <div className="h-4 w-3/4 bg-muted rounded"></div>
        <div className="h-3 w-1/2 bg-muted rounded"></div>
        <div className="flex gap-2">
          <div className="h-5 w-14 bg-muted rounded-full"></div>
          <div className="h-5 w-14 bg-muted rounded-full"></div>
          <div className="h-5 w-14 bg-muted rounded-full"></div>
        </div>
        <div className="h-3 w-full bg-muted rounded mt-4"></div>
      </div>
    </div>
  );
}

export function SkeletonDashboard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8 animate-pulse", className)}>
      {/* Header */}
      <div className="space-y-3">
        <div className="h-8 w-64 bg-muted rounded"></div>
        <div className="h-4 w-96 bg-muted rounded"></div>
      </div>
      {/* Hero Card */}
      <div className="h-36 bg-muted rounded-2xl"></div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="h-24 bg-muted rounded-xl"></div>
        <div className="h-24 bg-muted rounded-xl"></div>
        <div className="h-24 bg-muted rounded-xl"></div>
      </div>
    </div>
  );
}
