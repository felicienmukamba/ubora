"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Upload, GitBranch, FileText, CheckSquare, ExternalLink, Clock, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/pedagogy/progress-ring";
import { CalloutBox } from "@/components/pedagogy/callout-box";
import { submitProject } from "@/lib/actions/communication";
import { toast } from "sonner";

interface SelfCheckItem {
  id: string;
  label: string;
  checked: boolean;
}

interface Project {
  id: string;
  title: string;
  course: string;
  status: "DRAFT" | "SUBMITTED" | "GRADED";
  deadline: string;
  score?: number | null;
  selfCheckItems: SelfCheckItem[];
}

const INITIAL_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Architecture Docker & Proxy Manager",
    course: "Architecture Docker et Réseaux Proxy",
    status: "DRAFT",
    deadline: "3 mai 2026",
    selfCheckItems: [
      { id: "c1", label: "Le fichier docker-compose.yml est fonctionnel", checked: true },
      { id: "c2", label: "Un réseau dédié proxy-network est utilisé", checked: true },
      { id: "c3", label: "Les ports ne sont pas exposés directement", checked: false },
      { id: "c4", label: "README.md avec les instructions de lancement", checked: false },
    ],
  },
  {
    id: "p2",
    title: "Application CRUD avec Next.js & Prisma",
    course: "Next.js Full-Stack avec Prisma",
    status: "SUBMITTED",
    deadline: "10 mai 2026",
    score: null,
    selfCheckItems: [
      { id: "c5", label: "CRUD complet (Create, Read, Update, Delete)", checked: true },
      { id: "c6", label: "Validation côté serveur avec Zod", checked: true },
      { id: "c7", label: "Interface responsive", checked: true },
      { id: "c8", label: "Tests E2E avec Playwright", checked: false },
    ],
  },
  {
    id: "p3",
    title: "Pipeline CI/CD GitHub Actions",
    course: "Fondamentaux DevOps & CI/CD",
    status: "GRADED",
    deadline: "20 avril 2026",
    score: 87,
    selfCheckItems: [
      { id: "c9", label: "Pipeline de build automatisé", checked: true },
      { id: "c10", label: "Déploiement sur AWS EC2", checked: true },
      { id: "c11", label: "Notifications Slack en cas d'échec", checked: true },
      { id: "c12", label: "Documentation du workflow", checked: true },
    ],
  },
];

const statusLabels: Record<string, { label: string; color: string }> = {
  DRAFT: { label: "Brouillon", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
  SUBMITTED: { label: "Soumis", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  GRADED: { label: "Évalué", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [expanded, setExpanded] = useState<string | null>("p1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleCheck = (projectId: string, itemId: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== projectId) return p;
      return {
        ...p,
        selfCheckItems: p.selfCheckItems.map(item => 
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      };
    }));
  };

  const handleProjectSubmit = async (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const uncheckedCount = project.selfCheckItems.filter(i => !i.checked).length;
    if (uncheckedCount > 0) {
      toast.warning(`Il vous reste ${uncheckedCount} critères à cocher.`);
      return;
    }

    setIsSubmitting(true);
    // Note: In a real app, we would get the actual userId from the session
    const result = await submitProject("demo-user-id", projectId, "https://github.com/demo/repo", [], JSON.stringify(project.selfCheckItems));

    if (result.success) {
      toast.success("Projet soumis avec succès !");
      setProjects(prev => prev.map(p => 
        p.id === projectId ? { ...p, status: "SUBMITTED" } : p
      ));
    } else {
      toast.error("Échec de la soumission");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Mes Projets</h1>
        <p className="text-muted-foreground mt-2">Déposez vos livrables, auto-évaluez votre travail et suivez les retours de votre mentor.</p>
      </header>

      <div className="space-y-6">
        {projects.map((project) => {
          const isExpanded = expanded === project.id;
          const status = statusLabels[project.status];
          const checkedCount = project.selfCheckItems.filter((i) => i.checked).length;
          const totalChecks = project.selfCheckItems.length;
          const checkProgress = Math.round((checkedCount / totalChecks) * 100);

          return (
            <div key={project.id} className="rounded-xl border bg-card shadow-sm overflow-hidden">
              {/* Header */}
              <button
                onClick={() => setExpanded(isExpanded ? null : project.id)}
                className="w-full p-6 flex items-center gap-4 text-left hover:bg-muted/30 transition-colors"
              >
                <ProgressRing progress={checkProgress} size={48} strokeWidth={4} color={project.status === "GRADED" ? "text-green-500" : "text-primary"} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{project.course}</p>
                </div>
                <div className="flex items-center gap-3">
                  {project.score !== undefined && project.score !== null && (
                    <span className="text-2xl font-bold text-green-600">{project.score}%</span>
                  )}
                  <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", status.color)}>{status.label}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{project.deadline}</span>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </div>
              </button>

              {/* Expandable Body */}
              {isExpanded && (
                <div className="p-6 pt-0 border-t space-y-6 animate-in slide-in-from-top-2 duration-300">
                  {/* Self-Assessment Checklist */}
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2"><CheckSquare className="w-4 h-4 text-primary" /> Auto-évaluation ({checkedCount}/{totalChecks})</h4>
                    <div className="space-y-2">
                      {project.selfCheckItems.map((item) => (
                        <button 
                          key={item.id} 
                          onClick={() => project.status === "DRAFT" && toggleCheck(project.id, item.id)}
                          disabled={project.status !== "DRAFT"}
                          className={cn(
                            "w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left",
                            project.status === "DRAFT" ? "hover:bg-muted/50 cursor-pointer" : "cursor-default"
                          )}
                        >
                          <div className={cn(
                            "h-5 w-5 rounded border flex items-center justify-center flex-shrink-0 transition-all", 
                            item.checked ? "bg-primary border-primary text-primary-foreground" : "border-input"
                          )}>
                            {item.checked && <CheckSquare className="w-3 h-3" />}
                          </div>
                          <span className={cn("text-sm transition-all", item.checked && "line-through text-muted-foreground")}>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Upload Zone */}
                  {project.status === "DRAFT" && (
                    <div className="space-y-4">
                      <CalloutBox type="warning" title="Avant de soumettre">
                        Assurez-vous d'avoir coché tous les critères de la checklist ci-dessus. Le mentor évaluera votre travail sur cette base.
                      </CalloutBox>

                      <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
                        <p className="font-medium">Glissez vos fichiers ici</p>
                        <p className="text-xs text-muted-foreground mt-1">Supports : ZIP, PDF, images. Max 50 Mo.</p>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" className="gap-2 flex-1"><GitBranch className="w-4 h-4" /> Lier un repository GitHub</Button>
                        <Button 
                          onClick={() => handleProjectSubmit(project.id)} 
                          className="gap-2 flex-1"
                          disabled={isSubmitting || checkedCount < totalChecks}
                        >
                          {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                          Soumettre le projet
                        </Button>
                      </div>
                    </div>
                  )}

                  {project.status === "SUBMITTED" && (
                    <CalloutBox type="info" title="En attente d'évaluation">
                      Votre projet a été soumis. Votre mentor évaluera votre livrable dans les prochaines 48h. Vous pouvez lui envoyer un message si besoin.
                    </CalloutBox>
                  )}

                  {project.status === "GRADED" && (
                    <CalloutBox type="success" title="Projet évalué">
                      Félicitations ! Vous avez obtenu {project.score}%. Consultez le feedback détaillé de votre mentor dans la section Messagerie.
                    </CalloutBox>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
