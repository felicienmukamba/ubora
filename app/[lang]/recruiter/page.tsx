"use client";

import React, { useState } from "react";
import { Search, QrCode, CheckCircle2, ExternalLink, Award, Building2, Briefcase, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mockProfiles = [
  {
    name: "Sophie Martin",
    skills: ["React", "TypeScript", "Next.js", "Prisma"],
    certificates: 3,
    score: 94,
    available: true,
  },
  {
    name: "Youssef Belkadi",
    skills: ["Docker", "AWS", "Kubernetes", "Terraform"],
    certificates: 2,
    score: 87,
    available: true,
  },
  {
    name: "Marie Lefèvre",
    skills: ["Python", "Data Science", "Machine Learning"],
    certificates: 4,
    score: 91,
    available: false,
  },
];

export default function RecruiterPortalPage() {
  const [verifyToken, setVerifyToken] = useState("");
  const [verified, setVerified] = useState<boolean | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold">Kladriva — Portail Recruteur</span>
          </div>
          <Button variant="outline" className="gap-2"><Briefcase className="w-4 h-4" /> Poster une offre</Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Vérification de Certificat */}
        <section className="rounded-2xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-primary/5 to-transparent">
            <h2 className="text-2xl font-bold flex items-center gap-3"><QrCode className="w-6 h-6 text-primary" /> Vérifier un certificat</h2>
            <p className="text-muted-foreground mt-2">Entrez la clé de vérification ou scannez le QR Code du certificat.</p>
          </div>
          <div className="p-8 pt-6">
            <div className="flex gap-3 max-w-lg">
              <input
                type="text"
                value={verifyToken}
                onChange={(e) => { setVerifyToken(e.target.value); setVerified(null); }}
                placeholder="Ex: KLA-CERT-2026-ABX7F"
                className="flex-1 px-4 py-3 border rounded-xl bg-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button onClick={() => setVerified(verifyToken.startsWith("KLA-CERT-"))} className="gap-2 px-6">
                <CheckCircle2 className="w-4 h-4" /> Vérifier
              </Button>
            </div>
            {verified !== null && (
              <div className={cn("mt-4 p-4 rounded-xl border", verified ? "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400" : "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400")}>
                {verified ? (
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Certificat authentique ✓</p>
                      <p className="text-sm mt-0.5">Délivré le 20 avril 2026 — Score : 87% — Cours : Fondamentaux DevOps & CI/CD</p>
                    </div>
                  </div>
                ) : (
                  <p className="font-medium">Certificat non trouvé. Vérifiez la clé saisie.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Recherche de Profils */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3"><Search className="w-6 h-6 text-primary" /> Recherche de talents</h2>
            <Button variant="outline" size="sm" className="gap-1.5"><Filter className="w-3.5 h-3.5" /> Filtres</Button>
          </div>
          <input type="text" placeholder="Rechercher par compétence (ex: Docker, React, AWS)..." className="w-full px-5 py-3 border rounded-xl bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />

          <div className="grid gap-4">
            {mockProfiles.map((profile) => (
              <div key={profile.name} className="rounded-xl border bg-card p-6 flex items-center justify-between hover-lift">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground">{profile.name.charAt(0)}</div>
                  <div>
                    <h3 className="font-semibold">{profile.name}</h3>
                    <div className="flex gap-1.5 mt-1.5 flex-wrap">
                      {profile.skills.map((skill) => (
                        <span key={skill} className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-lg font-bold">{profile.certificates}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Certificats</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">{profile.score}%</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Score moyen</p>
                  </div>
                  <div className={cn("px-3 py-1 rounded-full text-xs font-medium", profile.available ? "bg-green-500/10 text-green-600" : "bg-slate-500/10 text-slate-500")}>
                    {profile.available ? "Disponible" : "En recherche"}
                  </div>
                  <Button variant="outline" size="sm" className="gap-1.5"><ExternalLink className="w-3.5 h-3.5" /> Portfolio</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
