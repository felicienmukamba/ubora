"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Clock, Video, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MeetingHub({ className }: { className?: string }) {
  return (
    <div className={cn("grid md:grid-cols-3 gap-6", className)}>
      {/* Mentor Profile & Booking */}
      <div className="md:col-span-2 space-y-6">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
            <CalendarIcon className="w-5 h-5 text-primary" />
            Réserver un créneau de Mentorat
          </h2>
          
          <div className="flex gap-4 items-start mb-8 pb-6 border-b">
            <div className="w-16 h-16 rounded-full bg-muted overflow-hidden flex-shrink-0">
              <img src="https://i.pravatar.cc/150?u=felicien" alt="Mentor" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Félicien Mukamba</h3>
              <p className="text-muted-foreground text-sm">Expert DevSecOps & Cloud Architecture</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Disponible pour réservation
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Créneaux disponibles cette semaine</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { day: "Auj.", time: "14:00" },
                { day: "Auj.", time: "16:30" },
                { day: "Demain", time: "09:00" },
                { day: "Demain", time: "11:00", booked: true },
                { day: "Jeu.", time: "15:00" },
              ].map((slot, i) => (
                <Button 
                  key={i} 
                  variant={slot.booked ? "outline" : "default"} 
                  disabled={slot.booked}
                  className={cn("w-full gap-2", slot.booked && "opacity-50")}
                >
                  <Clock className="w-4 h-4" />
                  {slot.day} - {slot.time}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="space-y-6">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Prochaines Sessions</h3>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Aujourd'hui</span>
                <span className="text-xs font-mono text-muted-foreground">14:00 - 15:00</span>
              </div>
              <h4 className="font-medium text-sm mb-3">Revue d'architecture Docker</h4>
              <Button size="sm" className="w-full gap-2">
                <Video className="w-4 h-4" />
                Rejoindre la salle
              </Button>
            </div>

            <div className="p-4 rounded-lg border bg-muted/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Mardi prochain</span>
                <span className="text-xs font-mono text-muted-foreground">10:00 - 11:00</span>
              </div>
              <h4 className="font-medium text-sm mb-3 text-muted-foreground">Point d'étape : Projet Final</h4>
              <Button size="sm" variant="outline" className="w-full gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                Gérer la réservation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
