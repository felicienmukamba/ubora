"use client";

import React, { useState } from "react";
import { User, Bell, Shield, Moon, Sun, Globe, Key, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    mentorNudge: true,
    sessionReminder: true,
    projectDeadline: true,
  });
  const [twoFA, setTwoFA] = useState(false);

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  if (!mounted) return null;

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-3xl">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
        <p className="text-muted-foreground mt-2">Gérez votre profil, notifications et préférences de sécurité.</p>
      </header>

      {/* Profil */}
      <section className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <div className="p-6 border-b bg-muted/20">
          <h2 className="text-lg font-semibold flex items-center gap-2"><User className="w-5 h-5 text-primary" /> Profil</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground">AP</div>
            <div className="space-y-2">
              <Button variant="outline" size="sm">Changer la photo</Button>
              <p className="text-xs text-muted-foreground">JPG, PNG max 2 Mo</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nom complet</label>
              <input title="Nom complet" type="text" defaultValue="Apprenant Demo" className="w-full px-4 py-2 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input title="Email" type="email" defaultValue="demo@kladriva.com" className="w-full px-4 py-2 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <Button title="Sauvegarder les modifications">Sauvegarder les modifications</Button>
        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <div className="p-6 border-b bg-muted/20">
          <h2 className="text-lg font-semibold flex items-center gap-2"><Bell className="w-5 h-5 text-primary" /> Notifications</h2>
        </div>
        <div className="p-6 space-y-4">
          {[
            { key: "email", label: "Notifications par email", desc: "Recevez un récapitulatif quotidien." },
            { key: "push", label: "Notifications Push", desc: "Alertes en temps réel dans le navigateur." },
            { key: "mentorNudge", label: "Nudges de motivation", desc: "Votre mentor est averti si vous ne vous connectez pas pendant 3 jours." },
            { key: "sessionReminder", label: "Rappels de sessions", desc: "15 minutes avant chaque session de mentorat." },
            { key: "projectDeadline", label: "Deadlines de projets", desc: "48h et 24h avant la date limite de soumission." },
          ].map(({ key, label, desc }) => (
            <label key={key} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                  notifications[key as keyof typeof notifications] ? "bg-primary" : "bg-muted"
                )}
              >
                <span className={cn(
                  "inline-block h-4 w-4 rounded-full bg-white transition-transform shadow-sm",
                  notifications[key as keyof typeof notifications] ? "translate-x-6" : "translate-x-1"
                )} />
              </button>
            </label>
          ))}
        </div>
      </section>

      {/* Apparence */}
      <section className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <div className="p-6 border-b bg-muted/20">
          <h2 className="text-lg font-semibold flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> Apparence & Accessibilité</h2>
        </div>
        <div className="p-6 space-y-4">
          <label className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              {isDark ? <Moon className="w-5 h-5 text-purple-400" /> : <Sun className="w-5 h-5 text-yellow-500" />}
              <div>
                <p className="text-sm font-medium">Mode Sombre</p>
                <p className="text-xs text-muted-foreground">Réduit la fatigue oculaire lors des sessions de nuit.</p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={cn("relative inline-flex h-6 w-11 items-center rounded-full transition-colors", isDark ? "bg-primary" : "bg-muted")}
            >
              <span className={cn("inline-block h-4 w-4 rounded-full bg-white transition-transform shadow-sm", isDark ? "translate-x-6" : "translate-x-1")} />
            </button>
          </label>
        </div>
      </section>

      {/* Sécurité */}
      <section className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <div className="p-6 border-b bg-muted/20">
          <h2 className="text-lg font-semibold flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Sécurité & Conformité</h2>
        </div>
        <div className="p-6 space-y-4">
          <label className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Authentification à deux facteurs (2FA)</p>
                <p className="text-xs text-muted-foreground">Sécurisez votre compte avec une couche supplémentaire de protection.</p>
              </div>
            </div>
            <button
              onClick={() => setTwoFA(!twoFA)}
              className={cn("relative inline-flex h-6 w-11 items-center rounded-full transition-colors", twoFA ? "bg-primary" : "bg-muted")}
            >
              <span className={cn("inline-block h-4 w-4 rounded-full bg-white transition-transform shadow-sm", twoFA ? "translate-x-6" : "translate-x-1")} />
            </button>
          </label>
          <div className="p-3 rounded-lg bg-muted/30 border">
            <p className="text-xs text-muted-foreground">
              Vos données sont chiffrées au repos (AES-256) et en transit (TLS 1.3). Conforme RGPD. Pour plus d'informations, consultez notre politique de confidentialité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
