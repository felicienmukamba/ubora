import React from "react";
import { Users, BookOpen, Trophy, TrendingUp, Activity, BarChart3, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Utilisateurs totaux", value: "1,247", change: "+12%", icon: Users, color: "text-blue-500 bg-blue-500/10" },
  { label: "Cours publiés", value: "48", change: "+3", icon: BookOpen, color: "text-green-500 bg-green-500/10" },
  { label: "Certificats délivrés", value: "312", change: "+28", icon: Trophy, color: "text-orange-500 bg-orange-500/10" },
  { label: "Taux de complétion", value: "73%", change: "+5%", icon: TrendingUp, color: "text-purple-500 bg-purple-500/10" },
];

const recentActivity = [
  { user: "Sophie M.", action: "s'est inscrite au cours Docker Architecture", time: "Il y a 5 min" },
  { user: "Youssef B.", action: "a soumis le projet Pipeline CI/CD", time: "Il y a 12 min" },
  { user: "Marie L.", action: "a obtenu le certificat Next.js Full-Stack", time: "Il y a 30 min" },
  { user: "Karim D.", action: "a signalé un SOS sur le chapitre Kubernetes", time: "Il y a 1h" },
  { user: "Félicien M.", action: "a validé 3 projets d'étudiants", time: "Il y a 2h" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Administration</h1>
          <p className="text-muted-foreground mt-2">Vue d'ensemble de la plateforme Kladriva Academy.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2"><BarChart3 className="w-4 h-4" /> Rapport BI</Button>
          <Button variant="outline" className="gap-2"><Shield className="w-4 h-4" /> Logs système</Button>
        </div>
      </header>

      {/* KPIs */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border bg-card p-6 shadow-sm hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Activité récente */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="p-6 border-b bg-muted/20 flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2"><Activity className="w-5 h-5 text-primary" /> Activité récente</h3>
            <Button variant="ghost" size="sm">Voir tout</Button>
          </div>
          <div className="divide-y">
            {recentActivity.map((item, i) => (
              <div key={i} className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {item.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm"><span className="font-medium">{item.user}</span> {item.action}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1"><Clock className="w-3 h-3" />{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gestion rapide */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="p-6 border-b bg-muted/20">
            <h3 className="text-lg font-semibold">Actions rapides</h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-24 flex-col gap-2 hover-lift">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-xs">Gérer les utilisateurs</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 hover-lift">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-xs">Gérer les cours</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 hover-lift">
              <Trophy className="w-6 h-6 text-primary" />
              <span className="text-xs">Certificats en attente</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 hover-lift">
              <BarChart3 className="w-6 h-6 text-primary" />
              <span className="text-xs">Analytics détaillés</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
