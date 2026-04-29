"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen, Compass, LayoutDashboard, MessageSquare, Settings,
  Video, FolderKanban, Award, Menu, X, GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/pedagogy/status-badge";

const navItems = [
  { href: "", icon: LayoutDashboard, label: "Tableau de bord" },
  { href: "/courses", icon: BookOpen, label: "Mes Cours" },
  { href: "/explore", icon: Compass, label: "Explorer" },
  { href: "/projects", icon: FolderKanban, label: "Projets" },
  { href: "/meeting-hub", icon: Video, label: "Meeting Hub" },
  { href: "/messages", icon: MessageSquare, label: "Messagerie" },
  { href: "/certifications", icon: Award, label: "Certifications" },
];

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  const pathname = usePathname();
  const basePath = `/${lang}/dashboard`;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (itemHref: string) => {
    const fullPath = basePath + itemHref;
    if (itemHref === "") return pathname === basePath;
    return pathname.startsWith(fullPath);
  };

  return (
    <div className="flex min-h-screen bg-muted/10">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r bg-background flex flex-col transition-transform duration-300 md:translate-x-0 md:static md:z-auto",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-5 border-b flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Kladriva</span>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden h-8 w-8" onClick={() => setSidebarOpen(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={`${basePath}${item.href}`}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {item.label}
                {item.label === "Messagerie" && (
                  <span className="ml-auto bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mentor Status */}
        <div className="p-4 border-t space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <img src="https://i.pravatar.cc/40?u=felicien" alt="Mentor" className="w-8 h-8 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">Félicien M.</p>
              <StatusBadge status="online" label="Disponible" showDotOnly={false} className="mt-0.5 !text-[10px] !px-1.5" />
            </div>
          </div>
          <Link
            href={`${basePath}/settings`}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              pathname.includes("/settings")
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted"
            )}
          >
            <Settings className="w-5 h-5" />
            Paramètres
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden p-4 border-b flex items-center justify-between bg-background sticky top-0 z-30">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
          <span className="font-bold">Kladriva Academy</span>
          <div className="w-10" />
        </div>

        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

