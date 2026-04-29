"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { ProgressRing } from "@/components/pedagogy/progress-ring";
import { CoursePlayer } from "@/components/pedagogy/course-player";
import { QuizCard } from "@/components/pedagogy/quiz-card";
import { CalloutBox } from "@/components/pedagogy/callout-box";
import { ChevronLeft, ChevronRight, CheckCircle2, Circle, Lock, BookOpen, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MockLesson {
  id: string;
  title: string;
  completed: boolean;
  current?: boolean;
}

interface MockModule {
  id: string;
  title: string;
  current?: boolean;
  locked?: boolean;
  lessons: MockLesson[];
}

const mockModules: MockModule[] = [
  {
    id: "mod-1", title: "Introduction à Docker", lessons: [
      { id: "l1", title: "Qu'est-ce que Docker ?", completed: true },
      { id: "l2", title: "Installer Docker Desktop", completed: true },
      { id: "l3", title: "Premiers pas avec docker run", completed: true },
    ]
  },
  {
    id: "mod-2", title: "Les Images et Conteneurs", lessons: [
      { id: "l4", title: "Comprendre les images Docker", completed: true },
      { id: "l5", title: "Écrire un Dockerfile", completed: true },
    ]
  },
  {
    id: "mod-3", title: "Docker Compose", lessons: [
      { id: "l6", title: "Introduction à Docker Compose", completed: true },
      { id: "l7", title: "Créer un fichier docker-compose.yml", completed: false },
    ]
  },
  {
    id: "mod-4", title: "Réseaux Docker", current: true, lessons: [
      { id: "l8", title: "Les types de réseaux dans Docker", completed: true },
      { id: "l9", title: "Créer un réseau proxy-network", completed: false, current: true },
      { id: "l10", title: "Connecter les services au réseau", completed: false },
    ]
  },
  {
    id: "mod-5", title: "Déploiement en Production", locked: true, lessons: [
      { id: "l11", title: "Mettre en place UFW", completed: false },
      { id: "l12", title: "Configurer Nginx Proxy Manager", completed: false },
    ]
  },
];

export default function CourseDetailPage({ params }: { params: Promise<{ lang: string; courseId: string }> }) {
  const { lang } = use(params);
  const [activeView, setActiveView] = useState<"player" | "quiz">("player");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${lang}/dashboard/courses`} className="hover:text-primary transition-colors flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" /> Mes Cours
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">Architecture Docker et Réseaux Proxy</span>
      </nav>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Sidebar Programme */}
        <div className="w-full xl:w-80 flex-shrink-0 border rounded-xl bg-card overflow-hidden xl:max-h-[80vh] xl:overflow-y-auto">
          <div className="p-4 border-b bg-muted/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Programme du cours</h3>
              <ProgressRing progress={65} size={40} strokeWidth={4} color="text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">5/8 modules complétés · 65%</p>
          </div>

          <div className="divide-y">
            {mockModules.map((mod) => (
              <div key={mod.id}>
                <div className={`p-3 text-sm font-medium flex items-center justify-between ${mod.current ? "bg-primary/5 text-primary" : mod.locked ? "text-muted-foreground/50" : ""}`}>
                  <span className="flex items-center gap-2">
                    {mod.locked ? <Lock className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                    {mod.title}
                  </span>
                </div>
                <div className="space-y-0.5 px-2 pb-2">
                  {mod.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      disabled={mod.locked}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-left transition-colors ${
                        lesson.current ? "bg-primary/10 text-primary font-medium" :
                        lesson.completed ? "text-muted-foreground hover:bg-muted" :
                        mod.locked ? "text-muted-foreground/40 cursor-not-allowed" :
                        "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {lesson.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      ) : lesson.current ? (
                        <PlayCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 flex-shrink-0" />
                      )}
                      <span className="truncate">{lesson.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          {/* Tab Toggle */}
          <div className="flex gap-2 border-b pb-4">
            <Button variant={activeView === "player" ? "default" : "ghost"} size="sm" onClick={() => setActiveView("player")}>
              <PlayCircle className="w-4 h-4 mr-2" /> Lecteur de cours
            </Button>
            <Button variant={activeView === "quiz" ? "default" : "ghost"} size="sm" onClick={() => setActiveView("quiz")}>
              <CheckCircle2 className="w-4 h-4 mr-2" /> Quiz du chapitre
            </Button>
          </div>

          {activeView === "player" ? (
            <>
              <CoursePlayer title="Créer un réseau proxy-network" videoUrl="/videos/docker-ch4-network.mp4" />
              <CalloutBox type="info" title="Concept clé">
                En utilisant le nom du conteneur dans un réseau Docker dédié, Docker gère la résolution DNS interne automatiquement. Plus besoin de connaître les adresses IP !
              </CalloutBox>
            </>
          ) : (
            <div className="max-w-xl space-y-8">
              <QuizCard
                question="Pourquoi est-il recommandé d'utiliser un réseau Docker dédié plutôt que des IP fixes ?"
                options={[
                  { id: "a", label: "C'est plus rapide en termes de ping." },
                  { id: "b", label: "Les IP peuvent changer au redémarrage des conteneurs." },
                  { id: "c", label: "C'est obligatoire sur les serveurs cloud." },
                ]}
                correctOptionId="b"
                explanation="Docker attribue des IPs dynamiques. Avec un réseau nommé, la résolution DNS par nom de conteneur est fiable et sécurisée."
              />
              <QuizCard
                question="Quelle commande crée un réseau Docker de type bridge ?"
                options={[
                  { id: "a", label: "docker network create --driver bridge my-network" },
                  { id: "b", label: "docker create network my-network" },
                  { id: "c", label: "docker-compose network add my-network" },
                ]}
                correctOptionId="a"
                explanation="La commande docker network create avec le driver bridge est la façon standard de créer un réseau isolé."
              />
            </div>
          )}

          {/* Navigation de chapitre */}
          <div className="flex items-center justify-between pt-6 border-t">
            <Button variant="ghost" className="gap-2 text-muted-foreground">
              <ChevronLeft className="w-4 h-4" /> Les types de réseaux
            </Button>
            <Button className="gap-2">
              Connecter les services <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
