import React from "react";
import { ProgressRing } from "@/components/pedagogy/progress-ring";
import { ActionTimeline } from "@/components/pedagogy/action-timeline";
import { FeedbackCard } from "@/components/pedagogy/feedback-card";
import { PlayCircle, Clock, Trophy, BookOpen, CheckCircle2, Video, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Bonjour, Apprenant 👋</h1>
        <p className="text-muted-foreground mt-2">Prêt à reprendre là où vous vous étiez arrêté ?</p>
      </header>

      {/* Reprise Rapide (Zéro Friction) */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="space-y-3 z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
            <Clock className="w-3 h-3" />
            Dernière activité il y a 2 heures
          </div>
          <h2 className="text-2xl font-bold">Architecture Docker et Réseaux Proxy</h2>
          <p className="text-muted-foreground max-w-md">Chapitre 4 : Configuration du réseau `proxy-network` et isolement des conteneurs backend.</p>
        </div>
        <div className="flex items-center gap-6 z-10">
          <ProgressRing progress={65} size={80} strokeWidth={6} color="text-primary" />
          <Link href={`/${lang}/dashboard/courses/docker-architecture/lessons/chapter-4`}>
            <Button size="lg" className="gap-2 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <PlayCircle className="w-5 h-5" />
              Continuer la lecture
            </Button>
          </Link>
        </div>
      </section>

      {/* Statistiques & Progression */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="p-4 rounded-full bg-blue-500/10 text-blue-500">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Cours en cours</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="p-4 rounded-full bg-orange-500/10 text-orange-500">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Compétences validées</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="p-4 rounded-full bg-green-500/10 text-green-500">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Projets terminés</p>
            <p className="text-2xl font-bold">2/5</p>
          </div>
        </div>
      </div>

      {/* Section Activité Récente + Feedback Mentor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activité récente */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Activité récente</h3>
          <ActionTimeline
            items={[
              {
                id: "1",
                title: "Soumission du projet Docker",
                date: "Aujourd'hui à 10:30",
                description: "Lien GitHub soumis avec le docker-compose.yml.",
                isActive: true,
                icon: <FileCode className="w-3.5 h-3.5" />,
              },
              {
                id: "2",
                title: "Session de mentorat",
                date: "Hier à 14:00",
                description: "Revue d'architecture proxy-network avec Félicien.",
                icon: <Video className="w-3.5 h-3.5" />,
                href: `/${lang}/dashboard/meeting-hub`,
              },
              {
                id: "3",
                title: "Quiz Chapitre 3 validé",
                date: "Il y a 2 jours",
                description: "Score : 9/10 — Excellent.",
                icon: <CheckCircle2 className="w-3.5 h-3.5" />,
              },
            ]}
          />
        </div>

        {/* Dernier feedback du mentor */}
        <FeedbackCard
          mentorName="Félicien"
          date="Hier à 15:00"
          summary="Excellente session ! Tu as bien compris le concept d'isolation des conteneurs. N'oublie pas de sécuriser l'accès à ton proxy avec UFW."
          tasks={[
            { id: "t1", label: "Créer le docker-compose pour le Proxy Manager", isCompleted: true },
            { id: "t2", label: "Configurer UFW pour bloquer les accès directs aux ports" },
            { id: "t3", label: "Tester la redirection avec un nom de domaine local" },
          ]}
        />
      </div>
    </div>
  );
}
