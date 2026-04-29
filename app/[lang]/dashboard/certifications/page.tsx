import React from "react";
import { Award, Download, QrCode, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockCertificates = [
  {
    id: "cert-1",
    title: "Fondamentaux DevOps & CI/CD",
    issuedAt: "20 avril 2026",
    qrToken: "KLA-CERT-2026-ABX7F",
    score: 87,
  },
  {
    id: "cert-2",
    title: "Introduction à Docker",
    issuedAt: "10 mars 2026",
    qrToken: "KLA-CERT-2026-D0CKR",
    score: 92,
  },
];

const pendingCertificates = [
  { id: "pending-1", title: "Architecture Docker et Réseaux Proxy", progress: 65 },
  { id: "pending-2", title: "Next.js Full-Stack avec Prisma", progress: 30 },
];

export default function CertificationsPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Certifications</h1>
        <p className="text-muted-foreground mt-2">Vos certificats validés et les parcours en cours de complétion.</p>
      </header>

      {/* Certificats Obtenus */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><Award className="w-5 h-5 text-primary" /> Certificats Obtenus</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {mockCertificates.map((cert) => (
            <div key={cert.id} className="rounded-xl border bg-card shadow-sm overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-primary via-primary/60 to-primary/20"></div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-green-500" />Délivré le {cert.issuedAt}</p>
                  </div>
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm p-3 rounded-lg bg-muted/50 border">
                  <div>
                    <p className="text-xs text-muted-foreground">Score final</p>
                    <p className="text-lg font-bold">{cert.score}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Clé de vérification</p>
                    <p className="text-xs font-mono font-bold text-primary">{cert.qrToken}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1.5 flex-1"><Download className="w-3.5 h-3.5" />Télécharger PDF</Button>
                  <Button variant="outline" size="sm" className="gap-1.5 flex-1"><QrCode className="w-3.5 h-3.5" />QR Code</Button>
                  <Button variant="outline" size="sm" className="gap-1.5"><ExternalLink className="w-3.5 h-3.5" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificats En Cours */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><Clock className="w-5 h-5 text-orange-500" /> En cours de complétion</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {pendingCertificates.map((cert) => (
            <div key={cert.id} className="rounded-xl border bg-card shadow-sm overflow-hidden">
              <div className="p-6 space-y-4">
                <h3 className="font-semibold">{cert.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progression</span>
                    <span className="font-semibold">{cert.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${cert.progress}%` }}></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Complétez 100% du cours et validez le projet final pour obtenir votre certificat.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
