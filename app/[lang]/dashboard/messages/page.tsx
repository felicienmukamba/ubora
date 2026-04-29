import React from "react";
import { ThreadedChat } from "@/components/pedagogy/threaded-chat";
import { CalloutBox } from "@/components/pedagogy/callout-box";
import { Search } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Messagerie Contextuelle</h1>
        <p className="text-muted-foreground mt-2">Discutez avec votre mentor directement sur les concepts qui vous posent problème.</p>
      </header>

      <CalloutBox type="info" title="Bureau Virtuel Actif">
        Votre mentor Félicien est disponible du lundi au vendredi de 09h00 à 18h00. En dehors de ces heures, vos messages sont sauvegardés et l'IA peut vous proposer des articles de la base de connaissances.
      </CalloutBox>

      <div className="flex-1 flex gap-6 mt-4 overflow-hidden">
        {/* Sidebar des threads */}
        <div className="w-80 border rounded-xl bg-card overflow-hidden flex flex-col">
          <div className="p-4 border-b relative">
            <Search className="w-4 h-4 absolute left-7 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Rechercher un thread..." 
              className="w-full pl-9 pr-4 py-2 bg-muted/50 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* Thread Actif */}
            <div className="p-4 border-l-2 border-primary bg-primary/5 cursor-pointer">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-semibold text-primary uppercase">Chapitre 4</span>
                <span className="text-xs text-muted-foreground">09:30</span>
              </div>
              <h4 className="font-medium text-sm mb-1 truncate">Architecture Docker</h4>
              <p className="text-xs text-muted-foreground truncate">Félicien: Salut ! L'assistant a vu juste...</p>
            </div>
            {/* Thread Passé */}
            <div className="p-4 border-l-2 border-transparent hover:bg-muted/50 cursor-pointer transition-colors border-b">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-semibold text-muted-foreground uppercase">Projet Final</span>
                <span className="text-xs text-muted-foreground">Hier</span>
              </div>
              <h4 className="font-medium text-sm mb-1 truncate">Validation du schéma Prisma</h4>
              <p className="text-xs text-muted-foreground truncate">Vous: J'ai bien ajouté la table MessageThread.</p>
            </div>
          </div>
        </div>

        {/* Zone de discussion principale */}
        <div className="flex-1 border rounded-xl overflow-hidden shadow-sm">
          <ThreadedChat />
        </div>
      </div>
    </div>
  );
}
