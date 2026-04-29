import React from "react";
import { MeetingHub } from "@/components/pedagogy/meeting-hub";
import { VirtualClassroom } from "@/components/pedagogy/virtual-classroom";

export default function MeetingHubPage() {
  return (
    <div className="space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Meeting Hub</h1>
        <p className="text-muted-foreground mt-2">Réservez vos sessions de mentorat et accédez à votre salle de classe virtuelle.</p>
      </header>

      {/* Interface de Réservation */}
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Réservation (Bureau Virtuel)</h2>
        <MeetingHub />
      </section>

      {/* Interface Salle de Classe Virtuelle */}
      <section>
        <h2 className="text-xl font-semibold mb-4">2. Salle de Classe Virtuelle (Aperçu)</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Ceci est la vue &quot;Zéro Friction&quot; qui s&apos;ouvre au moment de votre session. Elle intègre le flux vidéo WebRTC ({"<"} 150ms), un tableau blanc et un éditeur de code collaboratif, sans quitter la plateforme.
        </p>
        <VirtualClassroom />
      </section>
    </div>
  );
}
