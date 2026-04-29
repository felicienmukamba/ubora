import React from "react";
import { ProgressRing } from "@/components/pedagogy/progress-ring";
import { CalloutBox } from "@/components/pedagogy/callout-box";
import { StatusBadge } from "@/components/pedagogy/status-badge";
import { QuizCard } from "@/components/pedagogy/quiz-card";
import { ActionTimeline } from "@/components/pedagogy/action-timeline";
import { FeedbackCard } from "@/components/pedagogy/feedback-card";

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Design System Pédagogique</h1>
        <p className="text-muted-foreground text-lg">
          Aperçu des composants créés pour l'interface de Kladriva Academy.
        </p>
      </div>

      {/* Progress Ring */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">1. Progress Ring (Motivation Visuelle)</h2>
        <div className="flex gap-8 items-center flex-wrap">
          <ProgressRing progress={25} size={80} strokeWidth={8} color="text-red-500" />
          <ProgressRing progress={65} size={100} strokeWidth={10} color="text-orange-500" />
          <ProgressRing progress={100} size={120} strokeWidth={12} color="text-green-500" />
        </div>
      </section>

      {/* Status Badge */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">2. Status Badge (Disponibilité)</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <StatusBadge status="online" />
          <StatusBadge status="busy" />
          <StatusBadge status="away" />
          <StatusBadge status="offline" />
          <div className="ml-8 border-l pl-8 flex gap-4">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              Mentors en ligne : <StatusBadge status="online" showDotOnly />
            </span>
          </div>
        </div>
      </section>

      {/* Callout Box */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">3. Callout Box (Sémantique)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CalloutBox type="info" title="Le saviez-vous ?">
            Docker crée un réseau "bridge" par défaut pour que les conteneurs puissent communiquer.
          </CalloutBox>
          <CalloutBox type="warning" title="Attention">
            N'exposez jamais vos ports de base de données directement sur internet sans pare-feu strict.
          </CalloutBox>
          <CalloutBox type="error" title="Erreur de déploiement">
            Le build Next.js a échoué car une variable d'environnement (DATABASE_URL) est manquante.
          </CalloutBox>
          <CalloutBox type="success" title="Projet Validé !">
            Félicitations, vous avez validé tous les critères de l'évaluation par les pairs.
          </CalloutBox>
        </div>
      </section>

      {/* Quiz Card */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">4. Quiz Card (Évaluation)</h2>
        <div className="max-w-xl">
          <QuizCard 
            question="Pourquoi est-il recommandé d'utiliser un réseau Docker (ex: proxy-network) plutôt que des IP fixes ?"
            options={[
              { id: "a", label: "C'est plus rapide en termes de ping." },
              { id: "b", label: "Les IP fixes peuvent changer au redémarrage des conteneurs." },
              { id: "c", label: "C'est obligatoire sur AWS." }
            ]}
            correctOptionId="b"
            explanation="En utilisant le nom du conteneur dans un réseau dédié, Docker s'occupe de la résolution DNS interne, ce qui est beaucoup plus fiable et sécurisé (pas d'exposition de ports sur l'hôte)."
          />
        </div>
      </section>

      {/* Action Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">5. Action Timeline (Historique)</h2>
        <div className="max-w-xl bg-card border rounded-xl p-6 shadow-sm">
          <ActionTimeline 
            items={[
              {
                id: "1",
                title: "Soumission du projet 'Architecture Docker'",
                date: "Aujourd'hui à 10:30",
                description: "Vous avez soumis le lien vers votre repository GitHub avec le fichier docker-compose.yml.",
                isActive: true
              },
              {
                id: "2",
                title: "Session de mentorat avec Félicien",
                date: "Hier à 14:00",
                description: "Revue de l'architecture et explication de la notion de 'proxy-network'.",
                href: "#"
              },
              {
                id: "3",
                title: "Inscription à la Kladriva Academy",
                date: "Il y a 3 jours",
              }
            ]}
          />
        </div>
      </section>

      {/* Feedback Card */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">6. Feedback Card (Compte-rendu)</h2>
        <div className="max-w-xl">
          <FeedbackCard 
            mentorName="Félicien"
            date="Hier à 15:00"
            summary="Excellente session ! Tu as bien compris le concept d'isolation des conteneurs. N'oublie pas de sécuriser l'accès à ton proxy avec UFW."
            tasks={[
              { id: "t1", label: "Créer le fichier docker-compose pour le Proxy Manager", isCompleted: true },
              { id: "t2", label: "Configurer UFW pour bloquer les accès directs aux ports" },
              { id: "t3", label: "Tester la redirection avec un nom de domaine local" }
            ]}
          />
        </div>
      </section>
    </div>
  );
}
