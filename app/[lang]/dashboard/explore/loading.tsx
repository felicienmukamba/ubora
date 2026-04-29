import React from "react";
import { SkeletonCourseCard } from "@/components/pedagogy/skeleton-screens";

export default function ExploreLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="space-y-3">
        <div className="h-8 w-64 bg-muted rounded"></div>
        <div className="h-4 w-96 bg-muted rounded"></div>
      </div>
      <div className="h-12 bg-muted rounded-xl"></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkeletonCourseCard />
        <SkeletonCourseCard />
        <SkeletonCourseCard />
        <SkeletonCourseCard />
        <SkeletonCourseCard />
        <SkeletonCourseCard />
      </div>
    </div>
  );
}
