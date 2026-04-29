"use client";

import React, { useState, use } from "react";
import { cn } from "@/lib/utils";
import { Star, MessageSquare, ChevronLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalloutBox } from "@/components/pedagogy/callout-box";
import Link from "next/link";

const rubricCriteria = [
  { id: "r1", label: "Fonctionnalité : Le projet fonctionne selon les spécifications", maxScore: 5 },
  { id: "r2", label: "Qualité du code : Lisibilité, structure et bonnes pratiques", maxScore: 5 },
  { id: "r3", label: "Documentation : README, commentaires et instructions claires", maxScore: 5 },
  { id: "r4", label: "Innovation : Solution créative au problème posé", maxScore: 5 },
];

export default function PeerReviewPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxTotal = rubricCriteria.reduce((a, c) => a + c.maxScore, 0);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${lang}/dashboard/projects`} className="hover:text-primary transition-colors flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" /> Projets
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">Peer Review</span>
      </nav>

      <header>
        <h1 className="text-3xl font-bold tracking-tight">Évaluation par les Pairs</h1>
        <p className="text-muted-foreground mt-2">Évaluez le projet d'un autre apprenant à l'aide de la grille de notation standardisée ci-dessous.</p>
      </header>

      {/* Projet à évaluer */}
      <div className="rounded-xl border bg-card shadow-sm p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><User className="w-5 h-5 text-muted-foreground" /></div>
          <div>
            <h3 className="font-semibold">Pipeline CI/CD GitHub Actions</h3>
            <p className="text-xs text-muted-foreground">Soumis par un pair anonyme · Cours : Fondamentaux DevOps</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="gap-2">Voir le repository GitHub</Button>
          <Button variant="outline" size="sm" className="gap-2">Télécharger les fichiers</Button>
        </div>
      </div>

      {submitted ? (
        <CalloutBox type="success" title="Évaluation soumise !">
          Merci pour votre contribution. Votre évaluation a été enregistrée et sera agrégée avec celles des autres pairs. Score total : {totalScore}/{maxTotal}.
        </CalloutBox>
      ) : (
        <>
          {/* Grille de notation standardisée */}
          <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
            <div className="p-6 border-b bg-muted/20">
              <h2 className="text-lg font-semibold">Grille de notation</h2>
              <p className="text-xs text-muted-foreground mt-1">Évaluez chaque critère de 1 à 5 étoiles.</p>
            </div>
            <div className="divide-y">
              {rubricCriteria.map((criterion) => (
                <div key={criterion.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{criterion.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Max : {criterion.maxScore} points</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: criterion.maxScore }, (_, i) => i + 1).map((star) => (
                      <button
                        title={`${star}`}
                        key={star}
                        onClick={() => setScores(prev => ({ ...prev, [criterion.id]: star }))}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star className={cn(
                          "w-7 h-7 transition-colors",
                          (scores[criterion.id] || 0) >= star
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted-foreground/30"
                        )} />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t bg-muted/10 flex items-center justify-between">
              <span className="text-sm font-medium">Score total</span>
              <span className="text-2xl font-bold text-primary">{totalScore}/{maxTotal}</span>
            </div>
          </div>

          {/* Commentaire */}
          <div className="rounded-xl border bg-card shadow-sm p-6 space-y-4">
            <h3 className="font-semibold flex items-center gap-2"><MessageSquare className="w-4 h-4 text-primary" /> Commentaire constructif</h3>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Décrivez les points forts et les axes d'amélioration du projet..."
              className="w-full h-32 bg-muted/30 border rounded-lg p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              className="w-full"
              disabled={Object.keys(scores).length < rubricCriteria.length}
              onClick={() => setSubmitted(true)}
            >
              Soumettre l'évaluation
            </Button>
            {Object.keys(scores).length < rubricCriteria.length && (
              <p className="text-xs text-muted-foreground text-center">Veuillez évaluer tous les critères avant de soumettre.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
